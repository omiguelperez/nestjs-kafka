import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { MessageTypes } from './enums';
import { OrderCreatedEvent } from './order-created.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern(MessageTypes.ORDER_CREATED)
  async handleOrderCreatedEvent(orderCreatedEvent: OrderCreatedEvent) {
    return this.appService.handleOrderCreatedEvent(orderCreatedEvent);
  }
}
