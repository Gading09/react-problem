import React from 'react';
import Header from '../components/header';
import axios from 'axios';
import BodySignIn from '../components/body-signin';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class SignIn extends React.Component{
    // semua state dan data pada sign-in ada di store js
    is_login = this.props.is_login;
    
    changeInput = e => {
        store.setState({[e.target.name] : e.target.value})
    }
    postLogin = () => {
        const data = {
            email: this.props.email,
            password: this.props.password
        };
        const self = this;
        if (this.props.email === "" || this.props.password === ""){
            alert("isi dulu gan")
        } else {
        axios 
            .post("https://alta13.free.beeceptor.com/login", data)
            .then(function(response) {
                console.log(response.data);
                if (response.data.hasOwnProperty("api_key")){
                    store.setState({"api_key": response.data.api_key});
                    store.setState({"is_login": true});
                    store.setState({"full_name": response.data.full_name});
                    store.setState({"email_profil": response.data.email});
                    (self.props.history.push("/profile"));
                }
            })
            .catch(function(error){
                console.log(error)
            })
            console.log(this.props.is_login)
    }
    }

    render(){
        return (
            <body>
            <Header 
                clickFunction={this.props.onClickFunctionCategory} //Dari store.js
                onChangeFunction={e => this.props.onChangeFunctionSearch(e)} //Dari store.js
            />
                {this.is_login ? (<div class="text-center"><h1>KAMU SUDAH LOGIN!</h1> 
                </div>) : <BodySignIn 
                changeInput={e => this.changeInput(e)} 
                postLogin={this.postLogin}
                preventDefault={e => e.preventDefault()}/>}
            </body>
        )
    }
}
export default connect("listNews, isLoading, category, api_key, is_login, full_name, email, email_profil", actions)(withRouter(SignIn));