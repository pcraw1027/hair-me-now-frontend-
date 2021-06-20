import React from 'react';
import MakeAppointment from "./MakeAppointment";
import StylistFind from "./StylistFind";
import { useSelector } from 'react-redux';

function CustomerHome() {
    // access the userId value in the redux store
  const userId = useSelector((state) => state.userId)
  console.log(userId)
    return <div>
        <StylistFind/>
        <MakeAppointment/>
    </div>
}
export default CustomerHome