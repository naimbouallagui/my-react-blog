import React ,{ useContext } from "react";
import Login from "../auth/Login";
import { Route, useHistory } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const PrivateRoute = ({ children, ...options }) => { 
    let history = useHistory();
    
    const { stateUser,dispatch } = useContext(UserContext);
  
    const finalComponent = (stateUser && stateUser.connectedUser !==null) ? children : <Login dispatch={dispatch} history={history} />;

    
    return <Route {...options} >{finalComponent}</Route>;
  };

  export default PrivateRoute;