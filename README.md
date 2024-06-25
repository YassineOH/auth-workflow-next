# Auth Workflow

This app demonstrates the authentication workflow using Auth.js V5 with Next.js, covering the entire process from **Authentication** to **Registering** users into a database.

## Prerequisites

To run this app, you will need:

- **GitHub credentials** for authentication
- **Postgres** database service from Vercel (you can modify the Drizzle configuration to use a local database if preferred)

## Technologies Used

- **Next.js**
- **Auth.js**
- **React Query**
- **React Hook Form**
- **Shadcn**

## Getting Started

Follow these steps to set up and run the app:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## Install dependencies:

```bash
bun install
Set up environment variables:
```

Create a .env.local file in the root of your project and add the following variables:


```bash
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
DATABASE_URL=your-vercel-postgres-database-url
```

## Run the development server:

```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Configuration
Drizzle Configuration:

The Drizzle configuration is set up to use a Vercel Postgres database by default. If you prefer to use a local database, update the drizzle.config.js file accordingly.

## License
This project is licensed under the MIT License. See the LICENSE file for details.