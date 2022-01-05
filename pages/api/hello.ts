// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

"use strict";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: 'email-smtp.eu-west-1.amazonaws.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SES_USER,
    pass: process.env.SES_PASS
  },
});

async function send(question: string, answer: string) {
  console.log(question)
  let info = await transporter.sendMail({
    from: '"Jerry Butler 👻" <jerry@ebutler.co.za>', // sender address
    to: "tawanda@mmogomedia.com, venolia@mmogomedia.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: `<b>${question}: ${answer}</b>`, // plain text body
    html: `<b>${question} : ${answer}</b>`, // html body
  });

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);
  console.log(data.question);
  send(data.question, data.answer)
  res.status(200).json({ name: 'John Doe' })
}
