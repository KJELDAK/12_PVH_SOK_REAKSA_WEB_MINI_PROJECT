import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import { loginService } from "@/service/auth.service";
// import { pages } from "next/dist/build/templates/app-page";
// import { signIn } from "next-auth/react";

export const authOption = {
  providers: [
    //logib by email and password
    CredentialsProvider({
      async authorize(useInfo) {
        // define object structure
        const newUserInfo = {
          email: useInfo.email,
          password: useInfo.password,
        };
        console.log("user info", newUserInfo);
        //call login service
        const login = await loginService(newUserInfo);
        console.log("login",login);
        return login.token;
      },
    }),
  ],
// secret: process.env.NEXTAUTH_SECRET,
// pages: {
//   signIn: "/login"

// },

  //use to set token to cookies
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
