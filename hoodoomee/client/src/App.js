import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import Navigation from './components/Nav'
import Auth from './Auth/Auth.js';
import './App.css';

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
                    <Navigation />
                    <h1>I Am In React</h1>
                    { (this.state.userDataReceived)
                        ? this.renderUsers()
                        : <p>Loading...</p>
                    }
                    <Route exact path='/test' render={ ()=> <h1>Hello</h1>} />
                </div>
            </Router>
        );
    }
}

export default App;
