import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import Search from "../components/Search";
import UserDash from "../components/UserDash";
import Favorite from '../components/Favorite';
import Booking from '../components/Booking'
import Callback from '../Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history} component={App}>
            <div>
                <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                <Route path='/userdash' render={(props) => <UserDash auth={auth} {...props} />} />
                <Route path='/search' render={(props) => <Search auth={auth} {...props} />} />
                <Route path='/bookings' render={(props) => <Booking auth={auth} {...props} />} />
                <Route path='/favorites' render={(props) => <Favorite auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            </div>
        </Router>
    );
}
