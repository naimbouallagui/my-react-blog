import React from 'react'
import Register from '../auth/Register'
import Login from '../auth/Login'
import AllArticles from '../Pages/AllArticles'
import AddArticle from '../Pages/AddArticle'
import UpdateArticle from '../Pages/UpdateArticle'
import DetailsArticle from '../Pages/DetailsArticle';

const allRoutes = [
    {
        path: "/login", exact: true, component: <Login />, private: false
    },
    {
        path: "/blog", exact: true, component: <AllArticles />, private: true,
    },
    {
        path: "/articles/add", exact: true, component: <AddArticle />, private: true,
    }
    ,
    {
        path: "/articles/edit/:id", exact: true, component: <UpdateArticle />, private: true,
    },
    {
        path: "/register", exact: true, component: <Register />, private: false,
    },
    {
        path: "/articles/:id", exact: true, component: <DetailsArticle />, private: false,
    }
]



export default allRoutes
