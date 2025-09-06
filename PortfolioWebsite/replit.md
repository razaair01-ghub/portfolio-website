# Overview

This is a modern full-stack web application built as a data analyst portfolio website. The application showcases a data scientist's professional profile, including their skills, certificates, projects, and interactive dashboards. It features a React frontend with shadcn/ui components, an Express.js backend, and PostgreSQL database integration using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for page transitions and interactive effects
- **Icons**: Lucide React icons and React Icons for social media/tech stack icons

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API endpoints under `/api` prefix
- **Development Server**: Vite integration for hot module replacement
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Component Structure
The application follows a component-based architecture with:
- **Page Components**: Home page with multiple sections (Hero, About, Certificates, Projects, Dashboards, Contact)
- **UI Components**: Reusable components from shadcn/ui library
- **Custom Components**: Portfolio-specific components like dashboard modals, floating backgrounds, and section components
- **Layout Components**: Navbar, Footer, and responsive design patterns

## Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless driver
- **Schema**: User management schema with Zod validation
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Build System
- **Bundler**: Vite for frontend development and building
- **Compilation**: esbuild for server-side bundling in production
- **TypeScript**: Strict type checking across the entire application
- **Path Aliases**: Configured path mapping for clean imports (@/, @shared/, @assets/)

## Deployment Architecture
- **Development**: Vite dev server with Express middleware integration
- **Production**: Static file serving with Express backend
- **Database Migrations**: Drizzle migrations system for schema management
- **Environment**: Environment-based configuration with development/production modes

# External Dependencies

## Core Technologies
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-kit**: Database migration and schema management tools

## UI and Styling
- **@radix-ui/***: Comprehensive UI primitive components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **framer-motion**: Animation library for React components

## Development Tools
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **tsx**: TypeScript execution for Node.js development
- **@replit/vite-plugin-***: Replit-specific development plugins

## Form and Data Handling
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolver for react-hook-form
- **zod**: Schema validation library
- **@tanstack/react-query**: Server state management and data fetching

## Additional Libraries
- **react-icons**: Icon library with multiple icon sets
- **date-fns**: Date utility library
- **wouter**: Minimal router for React applications
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider component