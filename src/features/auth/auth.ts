import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { comparePassword, saltAndHashPassword } from '@/utils/password';
import prisma from '@/lib/prisma';
import { appPath, routes } from '@/constants/routes';

export const authConfig = {
  pages: {
    signIn: routes.auth.login,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnApp = nextUrl.pathname.startsWith(appPath);
      if (isOnApp) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL(routes[appPath].main, nextUrl));
      }
      return true;
    },
  },
  providers: [Credentials({
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      let user = null;
      if(typeof credentials?.password !== 'string' || typeof credentials?.email !== 'string') {
        throw new Error('Invalid credentials.');
      }
      const pwHash = await saltAndHashPassword(credentials.password);

      user = await prisma.user.findUnique({
        where: {
          email: credentials.email,
        }
      });

      if (!user || await comparePassword(user.password, pwHash)) {
        throw new Error('Invalid credentials.');
      }
 
      return {
        id: user.id.toString(),
        email: user.email,
        name: user.name,
      };
    },
  }),],
} satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);