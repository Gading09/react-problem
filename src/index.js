import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import IndexPage from './page/index';
import AboutPage from './page/about';
import ContactPage from './page/contact';
import ExperiencePage from './page/experience';

// RENDER HOME
// ReactDOM.render(<IndexPage />, document.getElementById('root'));
// const element = document.getElementById("home");
// RENDER EXPERIENCE
// ReactDOM.render(<ExperiencePage />, document.getElementById('root'));
// const element = document.getElementById("experience");
// RENDER ABOUT
// ReactDOM.render(<AboutPage />, document.getElementById('root'));
// const element = document.getElementById("about");
// // RENDER CONTACT
ReactDOM.render(<ContactPage />, document.getElementById('root'));
// element.classList.add("active-page")

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
