import React, { Component } from 'react';
import Auth from './Auth/Auth.js';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userData: null,
            userDataReceived: false,
        };

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
            <div className="App">
                <h1>I Am In React</h1>
                { (this.state.userDataReceived)
                    ? this.renderUsers()
                    : <p>Loading...</p>
                }
            </div>
        );
    }
}

export default App;
