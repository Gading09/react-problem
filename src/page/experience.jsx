import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

class ExperiencePage extends React.Component{
    render() {
        return (
<body className="experience-body">
    <Header />
    <div className="container-fluid page-title-background">
        <div className="container page-title">
            <h1>EXPERIENCE</h1>   
        </div>          
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-10 align-items-center">
                <div className="experience-lists">
                    <ul className="exp-ul list-unstyled">
                        <div className="experience">
                            <li>
                                <div className="list-experience">
                                    <h1>FULL-STACK ENGINEER - ALTERRA ACADEMY</h1>
                                    <span className="periode">May, 2019 - Present</span>
                                    <p className="experience-desc">- Write modern, performant, maintainable code for a diverse array of client and internal projects <br />
                                        - Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</p>
                                    
                                </div>
                                <div className="circle"><br /></div>
                            </li>
                            <li>
                                <div className="list-experience">
                                    <h1>FRONTEND ENGINEER - APPLE</h1>
                                    <span className="periode">May, 2018 - May, 2019</span>
                                    <p className="experience-desc">Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript</p>
                                </div>
                                <div className="circle"><br /></div>
                            </li>
                            <li>
                                <div className="list-experience">
                                    <h1>UI/UX DESIGN - SCOUT</h1>
                                    <span className="periode">Januari, 2018 - April, 2018</span>
                                    <p className="experience-desc">- Developed and shipped highly interactive web applications for Apple Music using Ember.js - Architected and implemented the front-end of Apple Music’s embeddable web player widget, which lets users log in and listen to full songs in the browse</p>
                                    
                                </div>
                                <div className="circle"><br /></div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
    <Footer />
</body>
        )
    }
}

export default ExperiencePage;