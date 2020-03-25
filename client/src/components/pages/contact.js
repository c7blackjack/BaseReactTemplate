import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });
  }

  render() {
    return (
      <div className="container contact-form">
        <h1>Lets Chat!</h1>
        <div class="row">
          <div className="col-md-6">
            <p>Thousand Oaks, CA</p>
            <p>Email: TravisLloyd@Lloyddm.com</p>
            <p>Phone: (661) 414-4027</p>
          </div>

          <div className="col-md-6">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  placeholder="Name"
                ></Input>
              </FormGroup>
              <FormGroup>
                <label for="email">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  onChange={this.handleChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <label for="textarea">Message</label>
                <Input
                  type="textarea"
                  name="message"
                  placeholder="Write your message here"
                  onChange={this.handleChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Button action="submit">Submit</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
