# Wayback Museum

Wayback Museum is a handcrafted "Dead Websites Museum" built with Next.js 14 (App Router), Tailwind CSS, and Supabase.

## Highlights

- Deep 1999-inspired visual style: CRT scanlines, taskbar, flicker, marquee, beveled controls
- Boot intro screen with skip action
- Archive browser with search, filters, and sorting
- Full exhibit detail pages with history, stats, links, and community memories
- Community memory submissions saved to Supabase
- Submit-an-entry form stored in Supabase `pending_submissions`
- Custom retro 404 page and floppy-disk favicon

## Tech

- Next.js 14 App Router
- Tailwind CSS + custom CSS effects
- Supabase PostgreSQL

## Setup

1. Install dependencies

```bash
npm install
```

2. Configure env

```bash
cp .env.example .env
```

Set:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

3. Create schema and seed data in Supabase SQL editor

Run [db/schema.sql](db/schema.sql) first, then [db/seed.sql](db/seed.sql).

4. Start dev server

```bash
npm run dev
```

5. Open

http://localhost:3000

## Production

```bash
npm run build
npm run start
```

## Data Model

Tables:

- exhibits
- community_memories
- pending_submissions

Schema is in [db/schema.sql](db/schema.sql).