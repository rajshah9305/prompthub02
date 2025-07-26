# PromptHub

A modern, personal hub for saving, organizing, and searching prompts or notes.  
Built with React (frontend) and Express (API, serverless for Vercel).  
Ready for instant deployment to Vercel.

## Features

- User authentication (register/login, JWT)
- Add, view, search, and delete prompts
- Modern, responsive UI
- Serverless backend (Node.js/Express, `lowdb`)
- Instant deployment on Vercel

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/rajshah9305/prompthub02.git
cd prompthub02
```

### 2. Setup environment

Copy `.env.example` to `.env` and set a secure `JWT_SECRET`.

```bash
cp .env.example .env
# Edit .env and set JWT_SECRET=your_secret_here
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

- Connect your repo on [vercel.com](https://vercel.com/)
- Vercel auto-detects React and Node.js (serverless)
- Add your `JWT_SECRET` in Vercel Project Settings > Environment Variables
- Click "Deploy"!

## Project Structure

```
├── api/         # Serverless backend
├── src/         # React frontend
├── public/      # Static assets
├── .env.example
├── vercel.json  # Vercel config
├── README.md
```

## License

MIT