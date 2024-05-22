import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";


const AddRoom = () => {
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

  return (
    <div>
      <h2>AddRoom page</h2>
      {/* Form */}
      <AddRoomForm dates={dates} handleDates={handleDates} />
    </div>
  );
}

export default AddRoom