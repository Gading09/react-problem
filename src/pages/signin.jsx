import React from 'react';
import Header from '../components/header';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import BodySignIn from '../components/body-signin';

class SignIn extends React.Component{
    state = {
        email:"",
        password:"",
        is_login:false
    }
    is_login = JSON.parse(localStorage.getItem("is_login"));
    
    changeInput = e => {
        this.setState({[e.target.name] : e.target.value})
    }
    postLogin = () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        const self = this;
        axios 
            .post("https://alta13.free.beeceptor.com/login", data)
            .then(function(response) {
                console.log(response.data);
                if (response.data.hasOwnProperty("api_key")){
                    localStorage.setItem("api_key", response.data.api_key);
                    localStorage.setItem("is_login", true);
                    localStorage.setItem("full_name", response.data.full_name);
                    localStorage.setItem("email", response.data.email);
                    self.setState({ is_login: true })
                }
            })
            .catch(function(error){
                console.log(error)
            })
            if (this.state.email == "" || this.state.password == ""){
                alert("isi dulu gan")
            } else {
                self.props.history.push("/profile");
    }
    }
    clickFunction = async param => {
        return (<Redirect to={{pathname: "/"}} />)
}

    render(){
        return (
            <body>
                {this.is_login ? (<div class="row"><h1 class="text-left">KAMU SUDAH LOGIN!</h1> 
                <Link to="/"><button type="button" class="btn btn-secondary text-center">Back to Home</button></Link></div>) : <BodySignIn 
                changeInput={e => this.changeInput(e)} 
                postLogin={this.postLogin}
                preventDefault={e => e.preventDefault()}/>}
            </body>
        )
    }
}
export default SignIn;