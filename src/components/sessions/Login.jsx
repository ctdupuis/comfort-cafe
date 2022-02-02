import React, { Component } from 'react';
import "../../stylesheets/forms.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        type: "password"
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            email: "",
            password: ""
        });
    }

    handleVisToggle = () => {
        this.state.type === "password" ? this.setState({ ...this.state, type: "text"}) : this.setState({ ...this.state, type: "password"})
    }

    
    render() {
        return (
            <div className="wrapper" style={{ textAlign: "center", backgroundColor: "white" }}>
                <div className="form-cont">
                <h2 className="form-head">Log in</h2>
                    <form className="session-form" onSubmit={this.handleSubmit} >

                        <label htmlFor="email">Email</label>

                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />


                        <label htmlFor="password">Password</label>

                        <input type={this.state.type} name="password" value={this.state.password} onChange={this.handleChange} 
                        />
                        {  
                            this.state.type === "password" ? 
                            <FaEyeSlash className="eye" onClick={this.handleVisToggle}/>
                            :
                            <FaEye className="eye" onClick={this.handleVisToggle}/>
                        }
                       

                        <button type="submit">Log in</button>
                    </form>

                    <div style={{marginBottom: "2%"}}>Don't have an account yet? <NavLink to={"/register"}>Register here</NavLink></div>
                </div>
            </div>
        )
    }
}
