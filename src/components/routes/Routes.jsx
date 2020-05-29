import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import BlogList from '../pages/blog/BlogList';
import NewsFeed from '../pages/news/NewsFeed';
import NewsDetail from '../pages/news/NewsDetail';
import Dashboard from '../pages/users/Dashboard';
import Characters from '../pages/users/Characters';
import Settings from '../pages/users/Settings';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/news" component={NewsFeed} />
            <Route exact path="/news/:slug" component={NewsDetail} />
            {/* <Route exact path="/blog" component={BlogList} /> */}
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/characters" component={Characters} />
            <PrivateRoute exact path="/settings" component={Settings} />
        </Switch>
    )
}

export default Routes;
