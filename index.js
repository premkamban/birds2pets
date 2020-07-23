const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/sendmail", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Contact phone :${req.body.phone}</li>
    </ul>
    <h3>Message:</h3>
    <li>Enquiry for service : ${req.body.service}</li>
    <p>${req.body.message}</p>`;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "danvanthrikaconstruction@gmail.com",
        pass: "Soma@89981"
      }
    });

    let mailOptions = {
      from: req.body.email,
      to: "premkamban@gmail.com",
      replyTo: req.body.email,
      subject: "Request for Quotation",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }

      console.log("Message sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}......`);
});