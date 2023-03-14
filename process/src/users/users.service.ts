import { EmailService } from './../email/email.service';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as uuid from 'uuid';
import { UserInfo } from './UserInfo';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { ulid } from 'ulid';

@Injectable()
export class UsersService {
  constructor(
    private readonly emailService: EmailService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async createUser(name: string, email: string, password: string) {
    const UserExist = await this.checkUserExists(email);
    if (UserExist) {
      throw new UnprocessableEntityException('User already exists');
    }

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private async checkUserExists(emailAddress: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { email: emailAddress },
    });
    return user !== undefined;
  }

  private async saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    const user = new UserEntity();
    user.id = ulid();
    user.name = name;
    user.email = email;
    user.password = password;
    user.signupVerifyToken = signupVerifyToken;
    await this.userRepository.save(user);
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  async login(email: string, password: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  async getUserInfo(userId: string): Promise<UserInfo> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
