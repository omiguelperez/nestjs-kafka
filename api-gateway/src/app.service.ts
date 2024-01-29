import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './create-order-request.input';
import { ClientKafka } from '@nestjs/microservices';
import { MessageTypes } from './enums';
import { OrderCreatedEvent } from './order-created.event';
import * as uuid from 'uuid';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  createOrder(createOrderRequest: CreateOrderRequest) {
    this.billingClient.emit(
      MessageTypes.ORDER_CREATED,
      new OrderCreatedEvent(
        uuid.v4(),
        createOrderRequest.userId,
        createOrderRequest.price,
      ),
    );
  }
}
