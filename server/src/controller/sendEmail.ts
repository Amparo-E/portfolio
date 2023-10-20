import nodemailer from "nodemailer";

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
  remitter: string,
  subject: string,
  text: string,
}

const handlerMail = (body: BodyRequest) => {
  const { remitter, subject, text } = body;
  let mailTransporter = nodemailer.createTransport({
    host: "smtp-relay.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "amparoesbr@gmail.com",
      pass: "AmpiEG03",
    },
  } as CreateTransport);

  let mailOptions = {
    from: `${remitter}`,
    to: `amparoesbr@gmail.com`,
    subject: `${subject}`,
    text: `${text}`,
  } as MailOptions;

};
