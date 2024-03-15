import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

let accessToken: string;

const authOptions: AuthOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ account }) {
      try {
        if (!account || !account.access_token || !account.expires_at) throw new Error();

        // 여기서 백엔드 서버로 account를 보내고,
        // 백엔드에서 신규 회원이면 user 데이터베이스에 저장한 후,
        // 새로 토큰(access_token, refresh_token)을 발급해 보내줌
        // ex) const tokens = await checkAccount(account);
        accessToken = account.access_token; // 이후, accessToken = tokens.accessToken 으로 변경해야 함

        return '/'; // 로그인 성공 시, 홈페이지로 이동
      } catch (err) {
        return '/unauthorized'; // 로그인 실패 시, '/unauthorized' url로 이동
      }
    },
    async jwt({ token, account }) {
      // 초기 로그인 시, 백엔드로부터 받은 access_token 저장해줌
      if (account) {
        token.accessToken = accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;

      return session;
    }
  }
};

const handler: NextAuthOptions = NextAuth(authOptions);

export { handler as GET, handler as POST };
