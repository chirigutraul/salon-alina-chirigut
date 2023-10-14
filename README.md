# Ally Nails Salon

This project is a web application for Ally Nails Salon. 
It serves as a landing page and it provides functionality for the clients of the salon.
Using this application, the clients can:
 - log in with Google or Facebook
 - create appointments
 - view useful salon information such as: prices, location, clients gallery, reviews etc.
 - view their profile, contact information
 - view their appointments history

# Tools used

The main technology stack of this project is TypeScript + Next.js. 
Besides those, the project uses Prisma as an ORM, Tailwind.CSS as a CSS framework and 
PlanetScale services for database.

# Environment Variables

The following environment variables are required to run the application:

- `API_URI`: The URI of the API server.
- `JWT_SECRET`: The secret key used to sign JSON Web Tokens.
- `GOOGLE_CLIENT_ID`: The client ID of the Google OAuth application.
- `GOOGLE_CLIENT_SECRET`: The client secret of the Google OAuth application.
- `FACEBOOK_CLIENT_ID`: The client ID of the Facebook OAuth application.
- `FACEBOOK_CLIENT_SECRET`: The client secret of the Facebook OAuth application.
- `NEXTAUTH_URL`: Url for next authentication path
- `DATABASE_URL`: The connection link for database

Make sure to set these environment variables before running the application.
