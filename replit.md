# SkillSwap Platform

## Overview

SkillSwap is a fully interactive React.js web application that connects people for skill sharing and learning. The platform features complete UI functionality with working buttons, modals, forms, and interactive components. Users can browse skills, request sessions, manage profiles, and communicate through the messaging system.

The application is built as a modern single-page application with React frontend, featuring responsive design, dark/light theme support, and comprehensive user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (Latest)

✓ **Full UI Interactivity Added** - All buttons and functionalities now work
✓ **Modal System** - Add Skill, Edit Profile, and Session Request modals
✓ **Theme System** - Dark/light mode toggle with persistent storage
✓ **Interactive Navigation** - Working sidebar navigation and routing
✓ **Form Handling** - Complete form validation and submission
✓ **Session Management** - Interactive session booking and management
✓ **Message System** - Working chat interface with send functionality
✓ **Profile Management** - Edit profile with avatar, bio, and skills
✓ **Skill Management** - Add new skills with categories and levels

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (via Neon serverless) for reliable data persistence
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot module replacement and error overlay via Vite integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL with UUID primary keys and proper indexing
- **Schema Management**: Drizzle migrations for version-controlled database changes
- **Connection**: Neon serverless database for scalable PostgreSQL hosting
- **Session Store**: Database-backed sessions for secure user authentication

### Authentication and Authorization
- **Session-based Authentication**: Server-side sessions stored in PostgreSQL
- **Password Security**: Planned implementation with proper hashing and salting
- **User Management**: Username/password authentication with extensible user profiles
- **Route Protection**: Planned middleware for protecting authenticated routes

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Advanced server state management with caching and synchronization
- **wouter**: Minimalist React router for single-page application navigation
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database

### UI and Styling
- **@radix-ui/***: Comprehensive collection of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework with custom design system integration
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Modern icon library with consistent design language

### Development and Build Tools
- **vite**: Fast build tool with hot module replacement and optimization
- **@vitejs/plugin-react**: React integration for Vite development server
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting for Replit environment
- **tsx**: TypeScript execution for Node.js development server

### Database and Validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation
- **zod**: Runtime type validation and schema definition
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Utility Libraries
- **date-fns**: Modern date manipulation and formatting utilities
- **clsx**: Conditional className utility for dynamic styling
- **nanoid**: Secure URL-friendly unique ID generator