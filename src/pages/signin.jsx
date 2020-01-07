import React from 'react';
import Header from '../components/header';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignIn extends React.Component{

    clickFunction = async param => {
        return (<Redirect to={{pathname: "/"}} />)
}
    render(){
        return (
            <body>
                <Header clickFunction={this.clickFunction} />
                
            </body>
        )
    }
}
export default SignIn;