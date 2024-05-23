import NextAuth from 'next-auth'
import OktaProvider from 'next-auth/providers/okta'
import GoogleProvider from 'next-auth/providers/google';

const options = {
  // Configure one or more authentication providers
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      issuer: process.env.OKTA_ISSUER
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid https://www.googleapis.com/auth/calendar.readonly'
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("user",user);
      // console.log("account",account);
      // console.log("profile",profile);
      // console.log("email",email);
      // console.log("credentials",credentials);
      return true;
    },
    async redirect({ url, baseUrl }) {
      // console.log("url",url,"baseUrl",baseUrl)//url http://localhost:3000 baseUrl http://localhost:3000
      return baseUrl;
    },
    
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }
}

export default NextAuth(options)
