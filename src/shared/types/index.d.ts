import 'express';
import type { User } from 'prisma/generated';

declare module 'express' {
  export interface Request {
    user?: Payload;
    authInfo?: User;
  }
}

interface Payload {
  sub: string;
  username: string;
}
