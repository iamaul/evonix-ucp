import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BlogList from '../pages/blog/BlogList';
import Dashboard from '../pages/users/Dashboard';

import PrivateRoute from '../route/PrivateRoute';
// import Page404 from '../pages/error/Page404';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/blog" component={BlogList} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            {/* <Route component={Page404} /> */}
        </Switch>
    )
}

export default Routes;
