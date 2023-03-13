import Mail = require('nodemailer/lib/mailer');
import { Injectable, Inject } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigType } from '@nestjs/config';
import emailConfig from 'src/config/emailConfig';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private tansporter: Mail;

  constructor(
    @Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>,
  ) {
    this.tansporter = nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = this.config.baseUrl;
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
