import { app } from "../app";
import { Router } from "express";
import nodemailer from "nodemailer";

const emailRoute = Router();

interface Auth {
  user: string;
  pass: string;
}

interface CreateTransport {
  host: string;
  port: number;
  secure: boolean;
  auth: Auth;
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

interface BodyRequest {
from: string;
  subject: string;
  message: string;
}

emailRoute.post("/", (req, res) => {
    const { from, subject, message } = req.body as BodyRequest;
    let mailTransporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "amparoesbr@gmail.com",
        pass: "jcfigtdqwfgzgbsy",
      },
    } as CreateTransport);

    let mailOptions = {
      from: `${from}`,
      to: `amparoesbr@gmail.com`,
      subject: `Message from ${from}: ${subject}`,
      text: `${message}`,
    } as MailOptions;

    mailTransporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err.message)
            res.status(500).send(err.message)
        } else {
            console.log
        }
    })

});

export default emailRoute;
