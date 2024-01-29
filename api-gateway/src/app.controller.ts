import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './create-order-request.input';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createOrder(@Body() createOrderRequest: CreateOrderRequest) {
    return this.appService.createOrder(createOrderRequest);
  }
}
