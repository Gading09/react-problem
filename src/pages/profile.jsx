import React from 'react';
import { Redirect, Link } from "react-router-dom";
import Header from "../components/header";

const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const email = localStorage.getItem("email");
    const full_name = localStorage.getItem("full_name");
    const clickFunction = async param => {
        return true
}

    if (is_login == null || is_login == false) {
        return (
            <body>
                <h1 class="text-center">KAMU BELUM LOGIN!</h1>
                <Link to="/signin" class="text-center"> <a class="nav-link" href="#" >Login disini!</a></Link>
            </body>
        )
    } else {
        return (
            <body>
            <div class="container">
                <div class="col-md-12 text-center">
                    <h1>PROFILE</h1>
                </div>
                <div class="col-md-12 text-center">
                    <h3>Email: {email}</h3>
                </div>
                <div class="col-md-12 text-center">
                    <h3>Full Name: {full_name}</h3>
                </div>
                <div class="row">
                <div class="col-md-6 text-left">
                <Link to="/"><button type="button" class="btn btn-secondary">Back to Home</button></Link></div>
                <div class="col-md-6 text-right">
                <Link to="/logout"><button type="button" class="btn btn-secondary">Log Out</button></Link></div>
                </div>
            </div>
            </body>
        )
    }
}
export default Profile;