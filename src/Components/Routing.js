import React from 'react'
import { Route } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import AllArticles from '../Pages/AllArticles'
import AddArticle from '../Pages/AddArticle'

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
        path: "/register", exact: true, component: <Register />, private: false,
    }
] 



export default allRoutes
