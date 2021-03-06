import React, { Fragment, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { setAuthToken } from './utils';
import history from './history';

// Components
import Quiz from './pages/users/applications/Quiz';

import Header from './layouts/header/Header';
// import BannerSlide from './slider/BannerSlide';
import Home from './Home';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import ConfirmEmailVerification from './pages/users/settings/ConfirmEmailVerification';
import Footer from './layouts/footer/Footer';

import PrivateRoute from './routes/PrivateRoute';
import Routes from './routes/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { userLoad } from './actions/auth';

// CSS/SCSS
import './App.scss';
import 'swiper/css/swiper.css'

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
                        <Route exact path="/reset/password/:code" component={ResetPassword} />
                        <PrivateRoute exact path="/email/verification/:code" component={ConfirmEmailVerification} />
                        <PrivateRoute exact path="/applications" component={Quiz} />
                        <Fragment>
                            <Header />
                            {/* <BannerSlide /> */}
                            <Route exact path="/" component={Home} />
                            <Route component={Routes} />
                            <Footer />
                        </Fragment>
                    </Switch>
                </Container>
            </Router>
        </Provider>
    )
}

export default App;
