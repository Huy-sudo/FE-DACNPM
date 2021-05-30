import React from 'react'
import Loadable from 'react-loadable'
import Login from "./login";
import Signup from "./signup";
import Error from "./Error404";
export default [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/errors/404',
        component: Error
    }
]