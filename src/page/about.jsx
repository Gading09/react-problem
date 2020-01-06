import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

class AboutPage extends React.Component{
    render(){
        return (
<body className="about-body">
    <Header />
    <div className="container-fluid page-title-background">
        <div className="container page-title">
            <h1>ABOUT ME.</h1>   
        </div>          
    </div>
    <div className="container">          
        <div className="row">
            <div className="col-md-6">
                <div className="about-me-content">
                    <div className="about-me-content__short-desc">
                        <p>Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design.</p>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <ul>
                            <li>
                                <div className="header">
                                    2014
                                </div>
                                <div className="header">
                                    DIPLOMA
                                </div>
                                <div className="detail">
                                    Computer Engineering - University of Chicago
                                </div>
                            </li>
                            <li>
                                <div className="header">
                                    2018
                                </div>
                                <div className="header">
                                    BACHELOR DEGREE
                                </div>
                                <div className="detail">
                                    BS Computer Engineering - University of Chicago
                                </div>                            
                            </li>                            
                        </ul>

                    </div>
                    <div className="work-exp">
                        <h2>Here's few technologies I've been working with recently:</h2>
                        <table className="table table-bordered">                            
                            <tbody>
                                <tr>
                                    <td>HTML & CSS</td>
                                    <td>Serverless</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>Programming</td>
                                    <td>Restful API</td>
                                    <td>Test Driven Dev</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Javascript</td>
                                    <td>Software Testing</td>
                                </tr>
                                <tr>
                                    <td>Git & Github</td>
                                    <td>Single Page App</td>
                                    <td>UX/UI Designer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>    
                </div>                
            </div>    
            <div className="col-md-6">
                <div className="img-container">
                    <div className="foto1">
                        <img src={require("../assets/img/foto-about.jpg")} alt="" />
                        
                    </div>
                    <div className="fotodot">
                        <img src={require("../assets/img/img-dot.png")} alt="" />    
                    </div>
                </div>
            </div>        
        </div>
    </div>
    <Footer />
</body>
        )
    }
}

export default AboutPage;