import { DefaultSession, JWT } from 'next-auth';

declare module 'next-auth' {
  export interface Session extends DefaultSession {
    accessToken: JWT;
  }
}

export {};
