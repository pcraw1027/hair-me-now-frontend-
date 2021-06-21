import '../App.css';
import Login from './Login';
import SignUp from './SignUp';
import SideBar from './SideBar';
import Splash from './Splash';
import StylistHome from './StylistHome';
import CustomerHome from './CustomerHome';
import StylistAppointmentMgmt from './StylistAppointmentMgmt';
import Prices from './Prices';
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

  function logOut() {
    localStorage.clear()
  }

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
        </Switch> 
        <button onClick={logOut}>Log Out</button>
        </Grid.Column>
      </Grid>
      
    </div>
  );
}

export default App;
