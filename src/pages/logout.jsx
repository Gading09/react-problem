import React from 'react';
import Header from '../components/header';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const clickFunction = async param => {
        return true
}
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    if (is_login == null || is_login == false) {
        return (
            <body>
                <h1 class="text-center">KAMU BELUM LOGIN MALAH MINTA LOGOUT!</h1>
                <Link to="/signin" class="text-center"> <a class="nav-link" href="#" >Login disini!</a></Link>
            </body>
        )
    }else{
    localStorage.setItem("is_login", false);
        return (<Redirect to={{pathname: "/"}} />
        )
    }
}
export default Logout