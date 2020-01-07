import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SignIn from "../pages/signin";
import BeritaDinamis from "../pages/berita-dinamis";

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={BeritaDinamis} />
                <Route exact path="/signin" component={SignIn} />
                {/* <Route exact path="/profile" component={profile} /> */}
                <Route path="/news-category/" component={BeritaDinamis} />
                {/* <Route component={NotMatch} /> */}
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;