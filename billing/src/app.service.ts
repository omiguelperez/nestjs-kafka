import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  async handleOrderCreatedEvent(data: OrderCreatedEvent) {
    console.log('Service: Received event: ', data);
  }
}
