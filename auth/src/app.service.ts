import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: 123,
      stripeUserId: 'stripe-user-123',
    },
    {
      userId: 456,
      stripeUserId: 'stripe-user-456',
    },
  ];

  getUser(getUserRequest: GetUserRequest) {
    const foundUser = this.users.find(
      (user) => user.userId === getUserRequest.userId,
    );
    return foundUser;
  }
}
