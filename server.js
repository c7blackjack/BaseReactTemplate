const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3>Contact Detail</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>message</h3>
        <p>${req.body.message}</p>
        `;

    let transporter = nodemailer.createTransport({
      host: "mail.lloyddm.com",
      port: 485,
      auth: {
        user: "myemail@email.com",
        pass: "mypassword"
      }
    });

    let mailOptions = {
      from: `${req.body.email}`,
      to: "travislloyd@lloyddm.com",
      replyTo: `${req.body.email}`,
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message Sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
