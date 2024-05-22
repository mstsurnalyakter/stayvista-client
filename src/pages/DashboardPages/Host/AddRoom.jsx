import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import {
  useMutation,
} from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";


const AddRoom = () => {

  const axiosSecure = useAxiosSecure();

  const {user} = useAuth();
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload Image");

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

  const {mutateAsync} = useMutation({
    mutationFn:async (roomData)=>{
      const { data } = await axiosSecure.post("/room", roomData);
      return data;
    },
    onSuccess:()=>{
      toast.success("Data saved successfully");
    }
  })

  //form handler
  const handleForm = async e => {

    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.endDate;
    const from = dates.startDate;
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

    try {
       const imageURL = await imageUpload(image);

       const roomData ={
        location,
        category,
        title,
        to,
        from,
        price,
        guests,
        bathrooms,
        bedrooms,
        host,
        description,
        image:imageURL,
       }

       console.table(roomData);

       // Post request to server
       await mutateAsync(roomData);





    } catch (error) {
        toast.error(error.message)
    }

  }

  // handle image changes
  const handleImage = image =>{
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name)
  }

  return (
    <>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>
      <AddRoomForm
        handleForm={handleForm}
        dates={dates}
        handleDates={handleDates}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
      />
    </>
  );
}

export default AddRoom