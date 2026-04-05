# Deployment Demo

A minimal React + Vite site for practicing the full deployment workflow.
This repo has **2 intentional bugs** to find and fix along the way — each one teaches a common real-world deployment mistake.

There are two branches:
- `main` — where you start, contains the bugs
- `solution` — all bugs fixed, peek here if you get stuck

---

## Before You Start

Make sure you have the following installed and set up:

- [Node.js](https://nodejs.org/) v18 or higher (npm comes with it)
- [Git](https://git-scm.com/)
- A [GitHub account](https://github.com)
- A [Vercel account](https://vercel.com) — sign up free using your GitHub account

---

## Step 1 — Fork this repo

Forking creates your own personal copy of this repo under your GitHub account, so you can make changes freely without affecting anyone else.

1. Click the **Fork** button in the top right corner of this page on GitHub
2. Leave all the default settings and click **Create fork**

You should now be on your own copy at `https://github.com/YOUR_USERNAME/demo-site`.

---

## Step 2 — Clone your fork locally

Open your terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/demo-site.git
cd demo-site
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 3 — Install dependencies and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The site should load fine locally.

---

## Step 4 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Find your `demo-site` fork and click **Import**
4. Leave all settings as default and click **Deploy**

Watch the build logs. It will fail. Read the error message carefully — it tells you exactly what went wrong.

---

## Step 5 — Fix Bug 1 and redeploy

> **Bug 1 — Case-sensitive import path**
>
> The error says Vite can't find a file. Look at `src/App.jsx` line 1 — the import path has the wrong capitalization. Your local Mac filesystem doesn't care about capitalization, but Vercel runs on Linux which is strict: `Logo.svg` and `logo.svg` are two different files.
>
> **Fix:** In `src/App.jsx`, change `Logo.svg` to `logo.svg` (lowercase L)

Save the file and push to GitHub:

```bash
git add .
git commit -m "fix: correct logo import path"
git push
```

Vercel automatically detects the push and redeploys. Once it goes green, click **Visit** to open your live site. It's up — but try pushing another change and watch what happens next.

---

## Step 6 — Fix Bug 2 and redeploy

Make any small edit (like changing the footer text in `src/App.jsx`), then push:

```bash
git add .
git commit -m "chore: small edit"
git push
```

The build will succeed but the **deployment step** will fail. Check the logs.

> **Bug 2 — Wrong output directory in vercel.json**
>
> `vercel.json` tells Vercel to look for the built files in a folder called `build`, but Vite always outputs to a folder called `dist`. The build ran fine but Vercel went looking in the wrong place and found nothing.
>
> **Fix:** Open `vercel.json` and change `"outputDirectory": "build"` to `"outputDirectory": "dist"`

Push the fix:

```bash
git add .
git commit -m "fix: correct vercel output directory"
git push
```

All green. Your site is fully deployed. ✓

---

## Stuck? Check the solution branch

Browse it on GitHub by switching to the `solution` branch in the branch dropdown, or pull it locally:

```bash
git fetch origin
git checkout solution
```

---

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Vercel](https://vercel.com/)
- Plain CSS
