import { User } from 'src/modules/users/entities/users.entity';

export class CreateSessionDTO {
  user: User;
  device: string;
  ip: string;
  userAgent: string;
}
