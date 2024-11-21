import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shakeitlovehs@gmail.com',
        pass: 'lixb bpoz aijh zvwk',
      },
    });
  }

  async sendMail(to: string, subject: string, message: string) {
    const mailOptions = {
      from: 'shakeitlovehs@gmail.com',
      to,
      subject,
      text: message,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
    } catch (error) {
      console.error('Error sending email: ', error);
      throw new Error('Failed to send email');
    }
  }
}
