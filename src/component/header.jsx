import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';

class Header extends React.Component{
    render () {
    return (
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <a href="" className="header-logo">
                        <img src={require("../assets/img/logo-ALTA.png")} />
                    </a>
                </div>
                <div className="col-md-6">
                    <div className="header-nav">
                        <ul className="header-nav__list list-unstyled">  
                            <li> 
                                <a href="index.html" id="home" >HOME</a>
                            </li>
                            <li>
                                <a href="about.html" id="about" >ABOUT</a>
                            </li>
                            <li>
                                <a href="experience.html" id="experience" >EXPERIENCE</a>
                            </li>
                            <li>
                                <a href="contact.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
    }
}

export default Header;