import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';

import { Injectable } from '@nestjs/common';
import { EmailOptions } from './interface/emailoption.interface';

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PWD,
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://localhost:3000';

    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const emailOptions: EmailOptions = {
      to: emailAddress,
      subject: 'Welcome to NestJS',
      html: `
        가입확인 버튼을 누르시면 가입 인증이 완료 됩니다.<br/>
        <form action="${url}" method="post">
          <button type="submit">가입확인</button>
        </form>
        `,
    };
    return await this.transporter.sendMail(emailOptions);
  }
}
