import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/about/About';
import Donation from '../pages/donation/Donation';
import NewsFeed from '../pages/news/NewsFeed';
import NewsDetail from '../pages/news/NewsDetail';
import Dashboard from '../pages/users/Dashboard';
import Characters from '../pages/users/Characters';
import Settings from '../pages/users/Settings';
import Page404 from '../pages/error/Page404';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/donation" component={Donation} />
            <Route exact path="/news" component={NewsFeed} />
            <Route exact path="/news/:slug" component={NewsDetail} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/characters" component={Characters} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <Route path="*" component={Page404} />
        </Switch>
    )
}

export default Routes;
