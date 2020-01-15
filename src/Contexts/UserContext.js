import React, { createContext, useReducer } from "react";
import { UserReducer } from "../Reducers/UserReducer";

export const UserContext = createContext();
const UserContextProvider = (props) => {
  const connectedUser = localStorage.connectedUser;
  const initialState = {users: [], connectedUser: connectedUser || null} 
  const [stateUser, dispatch] = useReducer(UserReducer, initialState);
  return (
      <UserContext.Provider value={{ stateUser, dispatch}}>
        { props.children }
      </UserContext.Provider>
  )
}

export default UserContextProvider;