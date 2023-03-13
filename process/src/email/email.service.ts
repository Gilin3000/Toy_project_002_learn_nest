import Mail = require('nodemailer/lib/mailer');
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private tansporter: Mail;

  constructor() {
    this.tansporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = process.env.BASE_URL;
    const url = `${baseUrl}/users/verify-email?code=${signupVerifyToken}`;

    const mailOptions: EmailOptions = {
      to: emailAddress,
      subject: '회원가입을 위한 인증코드를 입력해주세요.',
      html: `가입확인 버튼을 누르시면 가입 인증이 완료됩니다. <br />
      <form action="${url}" method="post">
        <button type="submit">가입확인</button>
      </form>`,
    };
    return await this.tansporter.sendMail(mailOptions);
  }
}
