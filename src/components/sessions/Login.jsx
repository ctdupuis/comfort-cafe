import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        window.alert(`${this.state.username} | ${this.state.password}`);
        this.setState({
            username: "",
            password: ""
        });
    }

    render() {
        return (
            <div className="wrapper">
                <form className="session-form" onSubmit={this.handleSubmit} >

                    <label for="username">Username</label>

                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />


                    <label for="password">Password</label>

                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />

                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}
