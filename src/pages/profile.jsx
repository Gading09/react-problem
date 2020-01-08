import React from 'react';
import { Redirect, Link } from "react-router-dom";
import Header from "../components/header";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const Profile = props => {
    // variable tersebut didapat dari store js
    const is_login = props.is_login;
    const email = props.email_profil;
    const full_name = props.full_name;

    if (is_login == null || is_login == false) {
        return (
            <body>
                <Header 
                    clickFunction={props.onClickFunctionCategory} //Dari store.js
                    onChangeFunction={e => props.onChangeFunctionSearch(e)} //Dari store.js
                />
                <h1 class="text-center">KAMU BELUM LOGIN!</h1>
                <Link to="/signin" class="text-center"> <a class="nav-link" href="#" >Login disini!</a></Link>
            </body>
        )
    } else {
        return (
            <body>
                <Header 
                    clickFunction={props.onClickFunctionCategory} //Dari store.js
                    onChangeFunction={e => props.onChangeFunctionSearch(e)} //Dari store.js
                />
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
            </div>
            </body>
        )
    }
}
export default connect("listNews, isLoading, category, api_key, is_login, full_name, email, email_profil", actions)(withRouter(Profile));