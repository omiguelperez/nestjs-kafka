import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { MessageTypes } from './enums';
import { OrderCreatedEvent } from './order-created.event';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @EventPattern(MessageTypes.ORDER_CREATED)
  async handleOrderCreatedEvent(orderCreatedEvent: OrderCreatedEvent) {
    return this.appService.handleOrderCreatedEvent(orderCreatedEvent);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf(MessageTypes.GET_USER);
  }
}
