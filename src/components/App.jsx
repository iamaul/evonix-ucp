import React, { Fragment, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { setAuthToken } from './utils';
import history from './history';

// Components
import Quiz from './pages/users/applications/Quiz';

import Header from './layouts/header/Header';
import ImageCarousel from './slider/ImageCarousel';
import Home from './Home';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import NewsFeed from './pages/news/NewsFeed';
import NewsDetail from './pages/news/NewsDetail';
import Footer from './layouts/footer/Footer';
import Page404 from './pages/error/Page404';

import PrivateRoute from './routes/PrivateRoute';
import Routes from './routes/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { userLoad } from './actions/auth';

// CSS/SCSS
import './App.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

const App = () => {
    useEffect(() => {
        setAuthToken(localStorage.token);
        store.dispatch(userLoad());
    }, []);

    return (
        <Provider store={store}>
            <Router history={history}>
                <Container>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/forgot/password" component={ForgotPassword} />
                        <Route exact path="/news" component={NewsFeed} />
                        <Route exact path="/news/:slug" component={NewsDetail} />
                        <PrivateRoute exact path="/applications" component={Quiz} />
                        <Fragment>
                            <Header />
                            <ImageCarousel />
                            <Route exact path="/" component={Home} />
                            <Route component={Routes} />
                            <Footer />
                        </Fragment>
                        <Route component={Page404} />
                    </Switch>
                </Container>
            </Router>
        </Provider>
    )
}

export default App;
