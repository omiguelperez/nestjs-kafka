import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { MessageTypes } from './enums';
import { GetUserRequest } from './get-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(MessageTypes.GET_USER)
  getUser(getUserRequest: GetUserRequest) {
    return this.appService.getUser(getUserRequest);
  }
}
