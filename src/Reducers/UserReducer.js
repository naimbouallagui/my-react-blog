import { useHistory } from "react-router-dom";

export const UserReducer = (state={}, action) => {
  // console.log(useHistory());
  
  // const history = useHistory();
  switch (action.type) {
    case "REGISTER":
      let liste = JSON.parse(localStorage.getItem('listUsers'));
      if (!liste) {
        liste = [];
      }
      liste.push(action.user);
      localStorage.setItem('listUsers', JSON.stringify(liste));
      state.users = liste;
      return state;
    case "LOGIN":
      const listeUsers = JSON.parse(localStorage.getItem('listUsers'));
      const loginUser = listeUsers.find(user => { return (user.username === action.user.username && user.password === action.user.password) })
      if (loginUser) {
        localStorage.setItem('connectedUser', JSON.stringify(loginUser));
        return {...state, connectedUser: loginUser}
      }
      return state;
      case "LOGOUT":
        localStorage.removeItem("connectedUser");
        
          return {...state, connectedUser: null}
    default:
      return state;
  }
};
