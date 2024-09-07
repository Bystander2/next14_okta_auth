import NextAuth from "next-auth";
import Okta from "next-auth/providers/okta";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Okta],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("user", user);
      // console.log("account",account);
      // console.log("profile",profile);
      // console.log("email",email);
      // console.log("credentials",credentials);
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("url", url, "baseUrl", baseUrl); //url http://localhost:3000 baseUrl http://localhost:3000
      return baseUrl;
    },

    async jwt({ token, account }) {
      console.log("token:", token);
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("session:", session);
      // Send properties to the client, like an access_token from a provider.
      return session;
    },
  },
});
