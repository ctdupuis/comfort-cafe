import React, { Component } from 'react';
import "../../stylesheets/forms.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import moment from 'moment';
import { states } from './states';

export default class Register extends Component {
    state = {
        email: "",
        password: "",
        type: "password",
        name: { first: "", last: ""},
        address: {
            street: "",
            city: "",
            state: "",
            zip: ""
        },
        dob: ""
    };

    handleChange = e => {
        let nameSplit = e.target.name.split(":");
        if (nameSplit[0] === "address") {
            this.setState({
                address: {
                    ...this.state.address,
                    [nameSplit[1]] : e.target.value
                }
            })
        } else if (nameSplit[0] === "name") {
            this.setState({
                name: {
                    ...this.state.name,
                    [nameSplit[1]]: e.target.value
                }
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        let postObj = {...this.state};
        delete postObj.type;
        this.props.register(postObj, this.props.history);
        this.setState({
            email: "",
            password: "",
            type: "password",
            name: { first: "", last: ""},
            address: {
                street: "",
                city: "",
                state: "",
                zip: ""
            },
            dob: ""
        });
    }

    handleVisToggle = () => {
        this.state.type === "password" ? this.setState({ ...this.state, type: "text"}) : this.setState({ ...this.state, type: "password"})
    }
    
    populateOptions = () => states.map((st, idx) => <option key={idx} value={st.abbreviation}>{st.name}</option>)

    render() {
        return (
            <div className="wrapper" style={{ textAlign: "center", backgroundColor: "white" }}>
                <div className="form-cont">
                <h2 className="form-head">Sign up</h2>
                    <form className="session-form" onSubmit={this.handleSubmit} >

                        <h3 className="form-sect">Personal Info</h3>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />


                        <label htmlFor="password">Password</label>
                        <input type={this.state.type} name="password" value={this.state.password} onChange={this.handleChange} 
                        />

                        {  
                            this.state.type === "password" ? 
                            <FaEyeSlash onClick={this.handleVisToggle}/>
                            :
                            <FaEye onClick={this.handleVisToggle}/>
                        }

                        <label htmlFor="firstName">First Name</label>

                        <input type="text" name="name:first" value={this.state.name.first} onChange={this.handleChange} />

                        <label htmlFor="lastName">Last Name</label>

                        <input type="text" name="name:last" value={this.state.name.last} onChange={this.handleChange} />

                        <label>Date of Birth</label>

                        <input type="date" name="dob"  max={moment().format("YYYY-MM-DD")} value={this.state.dob} onChange={this.handleChange}/>

                        <h3 className="form-sect">Address</h3>

                        <label htmlFor="street">Street</label>

                        <input type="text" name="address:street" onChange={this.handleChange} value={this.state.address.street} />

                        <label htmlFor="city">City</label>

                        <input type="text" name="address:city" onChange={this.handleChange} value={this.state.address.city} />

                        <label>State</label>    
                        <select name="address:state" onChange={this.handleChange}>{this.populateOptions()}</select>

                        <label>Zip</label>
                        <input type="text" name="address:zip" onChange={this.handleChange} value={this.state.address.zip} maxLength={5} />

                       

                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        )
    }
}
