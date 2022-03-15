import React from "react";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({ children, loggedIn, ...rest }) => {
  return (
  <Route {...rest}>
    {loggedIn ? children : <Redirect to={"/"}/>}
  </Route>
  )
}


export default PrivateRoute;