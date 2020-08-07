import React, { Component } from 'react'
import axios from "axios";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            phone: "",
            email: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { name, email, phone, service, message } = this.state;
        await axios.post("/api/sendmail", {
            name,
            email,
            phone,
            service,
            message
        });
        console.log(this.state);
        e.target.reset();
        this.setState({ name: "", phone: "", email: "", message: "" });
    }
    render() {
        return (
            <form>
                <div className="form-group mb-4">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="*Name" />
                </div>
                <div className="form-group mb-4">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="*Enter email" />
                </div>
                <div className="form-group mb-4">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="*Phone" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="*Enter your query" ></textarea>
                </div>
                <button type="submit" className=" mt-3 btn-custom mt-3 mt-md-4 ml-md-4  btn btn-light">Submit</button>
            </form>
        )
    }
}
