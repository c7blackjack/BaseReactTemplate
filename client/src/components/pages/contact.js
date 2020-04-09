// import React, { Component } from "react";
// import { Form, FormGroup, Input, Label, Button } from "reactstrap";
// import axios from "axios";
// import Modal from "react-modal";

// class Contact extends Component {
// constructor() {

// super()

// state({
//   name: "",
//   email: "",
//   message: ""
// });

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);

// onSubmit = e => {
//   e.preventDefault();

//   if (this.state.name === "") {
//     this.setState({
//       nameError: "Please provide your name"
//     });
//   } else {
//     this.setState({ nameError: "" });
//   }

//   if (this.state.email === "") {
//     this.setState({
//       emailError: "Please provide an email address"
//     });
//   } else if (
//     this.state.email === "/^((?!@(>)*$/" ||
//     this.state.email.indexOf(".") === -1
//   ) {
//     this.setState({
//       emailError: "Please provide a valid email address"
//     });
//   } else {
//     this.setState({
//       emailError: ""
//     });
//   }
// };
// handleChange = e => {
//   this.setState({ [e.target.name]: e.target.value });
// };

// async handleSubmit(e) {
//   e.preventDefault();
//   const { name, email, message } = this.state;

//   const form = await axios.post("/api/form", {
//     name,
//     email,
//     message
//   });
// }

//   this.setState({
//     name: "",
//     email: "",
//     message: ""
//   });

// render() {
//   return (
//     <div className="container contact-form">
//       <h1>Lets Chat!</h1>
//       <div class="row">
//         <div className="col-md-6">
//           <p>Thousand Oaks, CA</p>
//           <p>Email: TravisLloyd@Lloyddm.com</p>
//           <p>Phone: (661) 414-4027</p>
//         </div>

//         <div className="col-md-6">
//           <Form
//             ref={form => (this.form = form)}
//             role="form"
//             id="emailForm"
//             onSubmit={this.handleSubmit}
//           >
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 onChange={this.handleChange}
//                 placeholder="Name"
//               ></Input>
//             </FormGroup>
//             <FormGroup>
//               <label for="email">Email</label>
//               <Input
//                 type="email"
//                 name="email"
//                 placeholder="example@email.com"
//                 onChange={this.handleChange}
//               ></Input>
//             </FormGroup>
//             <FormGroup>
//               <label for="textarea">Message</label>
//               <Input
//                 type="textarea"
//                 name="message"
//                 placeholder="Write your message here"
//                 onChange={this.handleChange}
//               ></Input>
//             </FormGroup>
//             <FormGroup>
//               <Button action="submit">Submit</Button>
//             </FormGroup>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
