
Special thanks to the below two contributors:<br/>
leebrandt: https://github.com/oktadev/okta-nextjs-typescript-example<br/> 
nickolasfisher: https://github.com/nickolasfisher/Okta_NextJs<br/>


This is a nextJs and Okta demo. Please check the Next_Okta_20240523.docx for details<br/>

1.Register an account on website: https://developer.okta.com/login/ (Need work email).Instead, we can download "okta for windows"(https://github.com/okta/okta-cli/releases) to resiger an account with personal email.<br/>

1.1 If we use "okta for windows", unzip the downloaded file and put okta.exe into a folder, then enter the folder using cmd:<br/>
okta register<br/>


2.Login the website: https://developer.okta.com/login/, then click "Applications"->"Applications" to create app integration, choose "oidc" and "Web Application" to generate a react app. Note down the client id and domain.<br/>

Set up the settings:
Sign-in redirect URIs: http://localhost:3000/api/auth/callback/okta Sign-out redirect URIs: http://localhost:3000/api/auth/signout(Need to check later) Grant type: "Authorization Code" and "Refersh Token" Assignments->Controlled access: Allow everyone in your organization to access

3.Add one person on the Directory->people<br/>

4.Open the app using vscode<br/>

4.1 Modify OKTA_CLIENTID,OKTA_CLIENTSECRET, OKTA_ISSUER, and NEXTAUTH_URL in the .env.local file<br/>
OKTA_CLIENTID=""##Get this from the app we created in step 2.<br/>
OKTA_CLIENTSECRET=""##Get this from the app we created in step 2.<br/>
OKTA_ISSUER="https://dev-85274789.okta.com/oauth2/default"<br/>
NEXTAUTH_URL=http://localhost:3000<br/>

5.Use "yarn install" to install dependencies<br/>

6.Use yarn dev to run the app<br/>

7.Click the login button and forward to "okta" sign in page, then input the user name and password that created on step 3<br/>.



