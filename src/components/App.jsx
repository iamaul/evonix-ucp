import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// Components
import Header from './layouts/header/Header';
import ImageCarousel from './slider/ImageCarousel';
import index from './index';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Footer from './layouts/footer/Footer';

import Routes from './route/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { userLoad } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

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
            <Router>
                <Container>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/forgot/password" component={ForgotPassword} />
                        <Fragment>
                            <Header />
                            <ImageCarousel />
                            <Route exact path="/" component={index} />
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
