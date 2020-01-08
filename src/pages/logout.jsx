import React from 'react';
import Header from '../components/header';
import { Redirect, Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const Logout = props => {
    // mengetahui apakah user tersebut sudah login
    const is_login = props.is_login;
    if (is_login === null || is_login === false) {
        return (
            <body>
                <Header 
                    clickFunction={props.onClickFunctionCategory} //Dari store.js
                    onChangeFunction={e => props.onChangeFunctionSearch(e)} //Dari store.js
                />
                <h1 class="text-center">KAMU BELUM LOGIN MALAH MINTA LOGOUT!</h1>
                <Link to="/signin" class="text-center"> <a class="nav-link" href="#" >Login disini!</a></Link>
            </body>
        )
    }else{
    store.setState({is_login:false});
        return (
            <body>
                <Header 
                    clickFunction={props.onClickFunctionCategory} //Dari store.js
                    onChangeFunction={e => props.onChangeFunctionSearch(e)} //Dari store.js
                />
                {alert("successfully logged out!")}
                <Redirect to={{pathname:"/"}} />
            </body>
        )
    }
}
export default connect("listNews, isLoading, category, is_login", actions)(withRouter(Logout));