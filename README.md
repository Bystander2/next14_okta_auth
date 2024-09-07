All code is base on https://github.com/guardiangel/okta-nextjs-typescript-example.So thanks for authors.

If you want to use nextjs(use pages) and next-auth4, you can refer to https://github.com/guardiangel/okta-nextjs-typescript-example.

If you want to use nextjs(use app) and next-auth5, then please go ahead.I am new to nextjs and ts, and this is a demo about auth in okta in nextjs.

1.Register an account on website: https://developer.okta.com/login/ (Need work email).Instead, we can download "okta for windows"(https://github.com/okta/okta-cli/releases) to resiger an account with personal email.<br/>

2.Login the website: https://developer.okta.com/login/, then click "Applications"->"Applications" to create app integration, choose "oidc" and "Web Application" to generate a react app. Note down the client id and domain.<br/>

Set up the settings:
Sign-in redirect URIs: http://localhost:3000/api/auth/callback/okta Sign-out redirect URIs: http://localhost:3000/api/auth/signout(Need to check later) Grant type: "Authorization Code" and "Refersh Token" Assignments->Controlled access: Allow everyone in your organization to access

3.Add one person on the Directory->people<br/>

4.Open the app using vscode<br/>

4.1 Modify AUTH_OKTA_ID,AUTH_SECRET, AUTH_OKTA_ISSUER, and AUTH_OKTA_SECRET in the .env.local file<br/>
AUTH_OKTA_ID=""##Get this from the app we created in step 2.<br/>
AUTH_SECRET=""##Get this from the app we created in step 2.(must be a non-empty string)<br/>
AUTH_OKTA_ISSUER="https://xxx.okta.com/oauth2/default"<br/>
AUTH_OKTA_SECRET="xxxx"(refer to "npx auth secret")br/>

5.Use "yarn install" to install dependencies<br/>

6.Use yarn dev to run the app<br/>

7.Click the "Sign in" button and forward to "okta" sign in page, then input the user name and password that created on step 3<br/>.
