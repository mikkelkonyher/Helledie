# Helledie Frontend Only

This repository has been trimmed to include only the frontend (React) application.

How to run locally:
- Prerequisites:
  - Node.js 18 or 20 LTS (CRA 5/react-scripts 5 does not support Node 22). Use nvm to switch: `nvm use 20`.
  - Yarn 1.x or npm installed.
- Steps:
  1. cd frontend
  2. yarn run clean   (or: npm run clean)  # removes node_modules and lockfiles
  3. yarn install     (or: npm install)
  4. yarn start       (or: npm start)

The app will start on http://localhost:3000

Build for production:
- cd frontend
- yarn build (or: npm run build)

Notes:
- There is no backend in this repo anymore. Any API calls (if present) must point to your own backend or mock endpoints.
- Tech stack: Create React App with CRACO, TailwindCSS, Radix UI components.
- If you see an error like "Cannot find module 'react-scripts/config/env.js'", ensure you installed dependencies and that your Node version is 18 or 20 (not 22).
