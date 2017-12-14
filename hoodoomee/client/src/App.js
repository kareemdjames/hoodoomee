import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
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
