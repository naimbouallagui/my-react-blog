import React from 'react';

const Login = ({dispatch, history}) => {
  
  // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // let history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN", user: { username: e.target.elements[0].value, password: e.target.elements[1].value  } })
    
    history.push("/blog");

}

  return (
    <div className="text-center">
      <form className="form-signin" onSubmit={handleSubmit}>
        <img className="mb-4" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input  type="text" id="inputUsername" className="form-control" placeholder="username" required="" autoFocus="" />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input  type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
      </form>
    </div>
  )
}

export default Login;

