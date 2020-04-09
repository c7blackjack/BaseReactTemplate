const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//const dev = app.get("env") !== "production";

// if (!dev) {
//   app.disable("x-powered-by");
//   app.use(compression());
//   app.use(morgan("common"));

//   app.use(express.static(path.resolve(__dirname, "build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// if (dev) {
//   app.use(morgan("dev"));
// }

const server = createServer(app);

/*      Server Listener     */

server.listen(PORT, err => {
  if (err) throw err;
  console.log("Server listening on port: ", PORT);
});

/*      Email Server Backend      */
//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*------   Routes  -------------*/

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
      pass: "password"
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
