import React, { Component } from "react";
import { Form } from "react-bootstrap";
import '../css/Form.css';

class ContactForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            message:""
        };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
       this.setState({
           [event.target.name]: event.target.value
       })
    }
   handleSubmit(event){
       console.log('hi', this.state);
       event.preventDefault();
}
   
render(){
        return (
            <form id="contactform" onSubmit={this.handleSubmit}>
                <div>
                    <h3 className="contactformh2">
                        Name:
                    </h3>
                    <input type="text" name="name"   value={this.state.name} onChange={this.onChange}/>
                </div>

                <div>
                    <h3 className="contactformh2">
                        Email:
                    </h3>
                    <input type="email" name="email"  value={this.state.email}  onChange={this.onChange}/>
                </div>

                <div>
                    <h3 className="contactformh2">
                        Message:
                    </h3>
                    <input type="text" name="message"  value={this.state.message}  onChange={this.onChange}/>
                </div>

                <div>
                    <input type="submit" value="Send Message" id="contactsubmit" />
                </div>
            </form>
        )
    }
}
export default ContactForm;