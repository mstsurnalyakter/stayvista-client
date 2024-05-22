import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";


const AddRoom = () => {
  const {user} = useAuth()
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });

//date range handler
  const handleDates =  item =>{
    console.log(item);
    setDates(item.selection);
  }

  //form handler
  const handleForm = async e => {

    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = '';
    const from = '';
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];

    const host ={
      name:user?.displayName,
      image:user?.photoURL,
      email:user?.email
    }

    const imageURL = await imageUpload(image)
    console.log(imageURL);

  }

  return (
    <div>
      <h2>AddRoom page</h2>
      {/* Form */}
      <AddRoomForm
        handleForm={handleForm}
        dates={dates}
        handleDates={handleDates}
      />
    </div>
  );
}

export default AddRoom