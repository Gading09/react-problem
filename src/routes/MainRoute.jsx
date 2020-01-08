import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SignIn from "../pages/signin";
import BeritaDinamis from "../pages/berita-dinamis";
import Profile from "../pages/profile";
import Logout from "../pages/logout";
import LihatSemua from "../pages/prank-semua";
import NotFound from "../pages/not-found";

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={BeritaDinamis} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/semua" component={LihatSemua} />
                <Route path="/news-category/" component={BeritaDinamis} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;