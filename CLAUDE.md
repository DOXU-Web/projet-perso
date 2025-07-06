# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 gaming website for "DOXU", a fighting game. The site features character showcases, gameplay videos, and a responsive design built with CSS modules.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

### App Router Structure
- Uses Next.js App Router (`app/` directory)
- Main page: `app/page.js` - Landing page with game sections
- Layout: `app/layout.js` - Root layout with French language setting

### Pages Router (Legacy)
- Character detail pages in `pages/` directory:
  - `/sethj` - Sethj character page
  - `/sheer` - Sheer character page  
  - `/sigg` - Sigg character page
- Each character page has navigation arrows and reuses `CharacterDetail` component

### Component Structure
All components are in `components/` directory with co-located CSS modules:
- `Header/` - Navigation with mobile responsive menu
- `Footer/` - Site footer
- `Banner/` - Hero banner component
- `ContentBlock/` - Reusable content sections with background images
- `CharacterDetail/` - Character information display
- `Showcase/` - Character showcase gallery
- `YoutubeEmbed/` - YouTube video player
- `GifGameplay/` - Animated GIF display for gameplay
- `ScrollButton/` - Scroll-to-top functionality

### Styling
- CSS Modules for component-specific styles (`.module.css`)
- Global styles in `app/globals.css`
- Material Icons font loaded from Google Fonts
- **Note: This project does NOT use Tailwind CSS - stick to CSS modules**

### Assets
- Game images, GIFs, and logos in `public/` directory
- Character portraits and artwork
- Gameplay demonstration GIFs
- Social media icons in `public/logo/`

## Key Technical Details

### Next.js Configuration
- Uses Turbopack for fast development
- Standard Next.js configuration (minimal `next.config.mjs`)
- ESLint extends Next.js core web vitals rules

### Dependencies
- React 19 with Next.js 15.2.2
- FontAwesome icons and React Icons
- Lucide React for additional icons

### Component Patterns
- Functional components with hooks
- CSS modules for styling with BEM-like naming
- Props-based component composition
- Client-side components marked with `"use client"`

## Development Notes

### Character Pages
- Character pages use both App Router (`app/`) and Pages Router (`pages/`)
- Navigation between characters uses Next.js Link component
- Character detail component is reusable across different character pages

### Responsive Design
- Mobile-first approach with responsive navigation
- CSS modules handle responsive breakpoints
- Mobile menu with hamburger toggle in Header component

### Content Structure
- Main page uses `ContentBlock` components for sections
- Each section has unique ID for anchor navigation
- Background images are specified per content block