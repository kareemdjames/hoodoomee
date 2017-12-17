import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import Auth from './Auth/Auth.js';
import './App.css';
import UserDash from './components/UserDash';
import Search from './components/Search'
import Home from './components/Home'

class App extends Component {
    constructor() {
        super();
        this.state = {
            userData: null,
            userDataReceived: false,
        };
    // auth stuff
    // const auth = new Auth();
    // auth.login();
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }


    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    userData: res,
                    userDataReceived: true,
                })
            }).catch(err => console.log(err));
    }

    renderUsers() {
        return this.state.userData.map((user) => {
            return (
                <div key={user.id}>
                    <p>Name: {user.fname}</p>
                    <p>Email: {user.email}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <Router>
                <div className="App">

                        <Route exact path='/' component={Home}/>

                        <Route path='/userdash' component={UserDash} />
                        <Route path='/search' component={Search} />

                </div>
            </Router>
        );
    }
}

export default App;
