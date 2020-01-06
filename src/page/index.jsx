import React from 'react';
import Header from '../component/header';

class IndexPage extends React.Component{
    render () {
        return (
        <body class="index-body">
            <Header />
            <section>
                <div class="container">
                    <div class="row main-content">
                        <div class="col-md-5">
                            <div class="home-foto">
                                <img src={require("../assets/img/foto-about.jpg")} alt="" />
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="home-text">
                                <p>Hi, my name is</p>
                                <h1>Anne Sullivan</h1>
                                <h3>I build things for the web</h3>
                                <a class="home-button-contact" href="contact.html">Get In Touch</a>
                            </div>
                        </div>
                    </div>    
                </div>                  
            </section>
        </body>
    )
    }
}

export default IndexPage;