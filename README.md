Export Mode: nextjs_app
Site Type: dashboard
Vibe: Cinematic Dark Luxe

How to Deploy to Vercel:

Create a new folder on your machine and run npx create-next-app@latest . (Choose: Yes to Tailwind, Yes to App Router, No to src directory).

Replace the generated package.json, tailwind.config.js, app/globals.css, app/layout.jsx, and app/page.jsx with the files provided above.

Push to GitHub.

Go to Vercel, import the repo, and hit Deploy. It will build and go live in ~60 seconds.

Key Notes:

Built using the Next.js App Router (app/ directory).

Layout uses a persistent sidebar that won't re-render on page changes (ideal for dashboards).

UI is currently populated with static mock data designed to sell the "dream" to the agent. Wire this up to your actual database (like Supabase or Firebase) when ready.
