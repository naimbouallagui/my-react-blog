import React from 'react';
import UserContextProvider from './Contexts/UserContext';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Routes from './Components/Routing';
import PrivateRoute from './Components/PrivateRoute';
import ArticleContextProvider from './Contexts/ArticleContext';



function App() {

  return (
    <div>
      <div className="container">
        <UserContextProvider>
          <ArticleContextProvider>
            <Router>
              <NavBar />
              <Switch>
                {Routes.map((e, index) => {

                  return <PrivateRoute key={index} exact={e.exact} path={e.path}>

                    {e.component}
                  </PrivateRoute>
                })};
          </Switch>
            </Router>
          </ArticleContextProvider>
        </UserContextProvider>
      </div>
    </div>
  );
}

export default App;
