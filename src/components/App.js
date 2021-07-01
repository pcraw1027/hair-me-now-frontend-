import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import SignUp from './SignUp';
import SideBar from './SideBar';
import Splash from './Splash';
import StylistHome from './StylistHome';
import CustomerHome from './CustomerHome';
import StylistAppointmentMgmt from './StylistAppointmentMgmt';
import Prices from './Prices';
import StylistProfile from './StylistProfile'
import ProductPurchaseMgmt from './ProductPurchaseMgmt'
import MakeAppointment from './MakeAppointment'
import CustomerProfile from './CustomerProfile'
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from "semantic-ui-react";


function App() {

  const [userType, setUserType] = useState("customers")

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/v1/${userType}", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(usertype => { 
  //     console.log(usertype)
  //   })
  // }, [])

  

  return (
    <div className="App">
      <Grid>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12}>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/stylisthome/:id">
            <StylistHome />
          </Route>
          <Route exact path="/customerhome/:id">
            <CustomerHome />
          </Route>
          <Route exact path="/prices">
            <Prices />
          </Route>
          <Route exact path="/stylistappointmentmgmt">
            <StylistAppointmentMgmt />
          </Route>
          <Route exact path="/stylistprofile">
            <StylistProfile />
          </Route>
          <Route exact path="/productpurchasemgmt">
            <ProductPurchaseMgmt />
          </Route>
          <Route exact path="/customermakeappointment">
            <MakeAppointment />
          </Route>
          <Route exact path="/customerprofile">
            <CustomerProfile />
          </Route>
        </Switch> 
       
        </Grid.Column>
      </Grid>
      
    </div>
  );
}

export default App;
