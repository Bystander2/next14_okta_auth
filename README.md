
Special thanks to the below two contributors:<br/>
leebrandt: https://github.com/oktadev/okta-nextjs-typescript-example<br/> 
nickolasfisher: https://github.com/nickolasfisher/Okta_NextJs<br/>

Note: <br/>
Sign in with Okta(used to sso login)<br/>
Sign in with Google(used to get calendar events from google apis)<br/>


This is a nextJs and Okta demo. Next_Okta_GoogleCalendarApi20240523.docx for details<br/>

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



Second: Google calendar apis<br/>
1. Open https://console.cloud.google.com/<br/>
2. Create a new project called googlecalendar(any name)<br/>
3. "APIs & Services" > "Library", search "Google Calendar API" and enable it.<br/>
4. "APIs & Services" > "Credentials"->CREATE CREDENTIALS, choose "OAuth Client Id"<br/>
    Application Type: Web Application<br/>
    Name: Web client1 (any name)<br/>
    Authorized JavaScript origins:<br/>
    http://localhost:3000<br/>
    Authorized redirect URIs<br/>
    http://localhost:3000/api/auth/callback/google<br/>

    Note: Save the credentials and note the Client ID and Client Secret.

5. "OAuth consent screen"->Publishing status<br/>
    Testing <br/> This status indicates the current app is in testing phase and only allows 100 users. 
    5.1 if we want to publish app, we need to meet the below requirements<br/>
    Push to production?<br/>
    Your app will be available to any user with a Google Account.<br/>

    You've configured your app in a way that requires verification . To complete verification, you will need to provide:<br/>

    An official link to your app's Privacy Policy<br/>
    A YouTube video showing how you plan to use the Google user data you get from scopes<br/>
    A written explanation telling Google why you need access to sensitive and/or restricted user data<br/>
    All your domains verified in Google Search Console<br/>

6. "OAuth consent screen"-> ADD USERS, add test users. <br/>
    Note: Since the app is in testing status, only the users added here can test in client app. If the app is published, all the users that has a google account can have access to the app.<br/>

 7. Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in the .env.local file<br/>
 8. Check the googlecalendar.tsx and calendar.ts for details.<br/>
 9. Test: <br/>
    9.1 http://localhost:3000/googlecalendar and click "Sign in with Google".<br/>
    9.2 Enter the created email in step 6 above (choose the email if logged in before), <br/>
    9.3 If no errors happens, visit http://localhost:3000/googlecalendar again. The page will display all the events in the google calendar. <br/>
    9.4 Try to add new events in the google calendar associated with the email. New events will be displayed immediately.<br/>

