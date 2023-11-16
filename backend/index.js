
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const Intercom = require('intercom-client');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Replace 'YOUR_INTERCOM_ACCESS_TOKEN' with your actual Intercom access token
const intercomAccessToken = 'dG9rOmU0ODlhMWM0XzAxMmVfNGM5MV9hNzQxX2RlOGFkNGQ2NWM3OToxOjA=';

// Check if the Intercom access token is provided
if (!intercomAccessToken) {
  throw new Error('Intercom access token is missing. Please provide a valid access token.');
}

// Try initializing the Intercom client with proper error handling
let intercom;
try {
  intercom = new Intercom.Client({ token: intercomAccessToken });
} catch (error) {
  console.error('Error initializing Intercom client:', error.message);
  throw error;
}

// Replace 'YOUR_GOOGLE_CLIENT_ID' and 'YOUR_GOOGLE_CLIENT_SECRET' with your actual Google OAuth credentials
const googleClientId = '133256383306-8ibvsb6l1hfr6u4krm9347dvrruj87la.apps.googleusercontent.com';
const googleClientSecret = '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';
if (!googleClientId || !googleClientSecret) {
  throw new Error('Google OAuth credentials are missing. Please provide a valid client ID and client secret.');
}

passport.use(new Strategy({
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: 'http://localhost:3001/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    // In a real application, you would save user information to a database
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

// Example endpoint to create a new conversation
app.post('/api/conversations', async (req, res) => {
  try {
    const { userId, message, category } = req.body;

    // Check if the Intercom client is initialized
    if (!intercom) {
      throw new Error('Intercom client is not properly initialized.');
    }

    // Create a new conversation with category tag
    const conversation = await intercom.conversations.create({
      user: { id: userId },
      body: message,
      tags: [{ name: category }],
    });

    res.json(conversation);
  } catch (error) {
    console.error('Error creating conversation:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Example endpoint to get user information
app.get('/api/user', (req, res) => {
  res.json(req.user);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
