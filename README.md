# customer-service-plateform
it is a customer service platform where users can log in using Google OAuth and interact with customer service through Intercom.com

 instructions on setting up and running your application:- 
1-run server(node index.js)
2- Navigate to Assignment directory(frontend) then press npm start.

ADDITIONAL SETUP:-
1. Google OAuth:

Go to Google Cloud Console.

Create a project, enable Google+ API.

Obtain client ID and secret, update ` .env`.

2. Intercom:

Go to Intercom Developer Hub.

Create an app, get access token, update ` .env`.

3. Explore:

Open http://localhost:3000.

Log in with Google.

Explore the dashboard and customer service features.


END TO END FLOW:-

1. User Authentication with Google OAuth:

User visits the customer service platform website. Clicks on the "Log in with Google" button.

The server redirects the user to Google for authentication.

• User logs in with their Google credentials and grants permission.

Google sends an authorization code back to the server's callback URL.

The server exchanges the authorization code for an access token and user information.

The user is now authenticated and has a session.

2. Dashboard Access:

Authenticated user is redirected to the dashboard.

The dashboard displays personalized information based on the user's profile.

The user has access to customer service features.

3. Interacting with Customer Service:

User initiates a customer service request or query.

• Categories for the request may include General Queries, Product Features Queries, Product Pricing Queries, and Product Feature Implementation Requests.

The user submits the request through a form or interface.

4. Handling Customer Service Requests:

The server receives the customer service request.

•The request is categorized based on the user's input.

. The server interacts with the Intercom API using the provided Intercom access token. appropriate category.

A new conversation or message is created on Intercom, tagged with the

•Intercom notifies the customer service team about the new request.

5. Customer Service Team Interaction:

Customer service team members log in to Intercom.

They see the new customer service request tagged with the relevant category.

Team members respond to the request through the Intercom dashboard.

. Conversations are tracked, and responses are sent to the user through Intercom.

6. User Notification:

The user receives notifications about customer service team responses.

Notifications may include emails, in-app messages, or other preferred communication channels

