import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from './scenes/Auth/router'
import router from './scenes/router'
export default [
    ...Auth,
    ...router
]
