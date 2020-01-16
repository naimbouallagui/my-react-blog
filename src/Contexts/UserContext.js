import React, { createContext, useReducer } from "react";
import { UserReducer } from "../Reducers/UserReducer";

export const UserContext = createContext();
const UserContextProvider = (props) => {
  const connectedUser = JSON.parse(localStorage.connectedUser||"{}");
  const users = JSON.parse(localStorage.users|| "[]");
  const initialState = {users: users||[], connectedUser: connectedUser.id ? connectedUser: null} 
  const [stateUser, dispatch] = useReducer(UserReducer, initialState);
  return (
      <UserContext.Provider value={{ stateUser, dispatch}}>
        { props.children }
      </UserContext.Provider>
  )
}

export default UserContextProvider;