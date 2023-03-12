import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'api.example.com' })
export class ApiController {
  @Get()
  index(): string {
    return 'Hello Api';
  }
}
