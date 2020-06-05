import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import BlogList from '../pages/blog/BlogList';
import About from '../pages/about/About';
import Donation from '../pages/donation/Donation';
import NewsFeed from '../pages/news/NewsFeed';
import NewsDetail from '../pages/news/NewsDetail';
import Dashboard from '../pages/users/Dashboard';
import Characters from '../pages/users/Characters';
import CharacterAdminWarn from '../pages/users/admin_warn/CharacterAdminWarn';
import CharacterInventory from '../pages/users/inventory/CharacterInventory';
import CharacterVehicle from '../pages/users/vehicle/CharacterVehicle';
import CharacterProperty from '../pages/users/property/CharacterProperty';
import Settings from '../pages/users/Settings';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/donation" component={Donation} />
            <Route path="/news" component={NewsFeed} />
            <Route path="/news/:slug" component={NewsDetail} />
            {/* <Route path="/blog" component={Blog} /> */}
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/characters" component={Characters} />
            <PrivateRoute path="/characters/:name/admin_records/:id" component={CharacterAdminWarn} />
            <PrivateRoute path="/characters/:name/inventory/:id" component={CharacterInventory} />
            <PrivateRoute path="/characters/:name/vehicle/:id" component={CharacterVehicle} />
            <PrivateRoute path="/characters/:name/property/:id" component={CharacterProperty} />
            <PrivateRoute path="/settings" component={Settings} />
        </Switch>
    )
}

export default Routes;
