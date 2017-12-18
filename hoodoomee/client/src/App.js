import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import './App.css';
import Home from './components/Home'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: null,
            userDataReceived: false,
        };
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
            <div>

            </div>
        );
    }
}

export default App;

