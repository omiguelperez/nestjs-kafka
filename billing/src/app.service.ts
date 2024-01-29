import { Inject, Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';
import { ClientKafka } from '@nestjs/microservices';
import { MessageTypes } from './enums';
import { GetUserRequest } from 'get-user-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  async handleOrderCreatedEvent(data: OrderCreatedEvent) {
    this.authClient
      .send(MessageTypes.GET_USER, new GetUserRequest(data.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with Stripe ID ${user.stripeUserId} and a price of ${data.price}`,
        );
      });
  }
}
