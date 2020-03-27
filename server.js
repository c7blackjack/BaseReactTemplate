const http = require("http");
const port = 3001;
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

app.get("/", function(req, res) {
  res.render("index", {});
});

const server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello Node");
  res.end();
});

server.listen(port, function(error) {
  if (error) {
    console.log("something went wrong", error);
  }
  console.log("Server listening on port: ", port);
});

/*      Email Server Backend      */
//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  // nodemailer.createTestAccount((err, account) => {
  //   const htmlEmail = `1
  //       <h3>Contact Detail</h3>
  //       <ul>
  //       <li>Name: ${req.body.name}</li>
  //       <li>Email: ${req.body.email}</li>
  //       </ul>
  //       <h3>message</h3>
  //       <p>${req.body.message}</p>
  //       `;

  let transporter = nodemailer.createTransport({
    host: "lloyddm.com",
    port: 465,
    secure: true,
    auth: {
      user: "travislloyd@lloyddm.com",
      pass: "Charliegirl231!"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("server is ready to take messages");
    }
  });

  console.log(req.body);

  let mailOptions = {
    to: "travislloyd@lloyddm.com",
    from: req.body.email,
    subject: req.body.name,
    html: req.body.message
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message Sent!");
    res.json({ message: "Message Sent!" });
    document.getElementById("emailForm").reset();
  });
});

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
