import React, { useState, useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { useHistory } from "react-router-dom";


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(UserContext);
    let history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "REGISTER", user: { username, password } })
        history.push("/blog");

    }

    return (
        <div className="text-center">
            <form className="form-signin" onSubmit={handleSubmit}>
                <img className="mb-4" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                {/* <label htmlFor="inputEmail" className="sr-only">First Name</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" /> */}
                <label htmlFor="inputUsername" className="sr-only">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" id="inputUsername" className="form-control" placeholder="username" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
            </form>
        </div>
    )
}

export default Register
