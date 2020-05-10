import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BlogList from '../pages/blog/BlogList';
import Dashboard from '../pages/users/Dashboard';
import Characters from '../pages/users/Characters';
import Settings from '../pages/users/Settings';

import PrivateRoute from './PrivateRoute';
// import Page404 from '../pages/error/Page404';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/blog" component={BlogList} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/characters" component={Characters} />
            <PrivateRoute exact path="/settings" component={Settings} />
            {/* <Route component={Page404} /> */}
        </Switch>
    )
}

export default Routes;