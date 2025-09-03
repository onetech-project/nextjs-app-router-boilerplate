# Next.js App Router Portfolio

A modern and animated portfolio website built with Next.js 13+ (App Router), React, Tailwind CSS, and TypeScript. Features smooth page transitions, beautiful animations, and a responsive design.

## Features
- 🎨 Modern design with gradient themes and glass morphism effects
- 🔄 Smooth page transitions and animations using Framer Motion
- 📱 Fully responsive design
- 🧭 Animated navigation with active state indicators
- 📅 Beautiful timeline component for projects
- 💻 Type-safe development with TypeScript
- 🧪 Unit tests for components
- 🐳 Docker support
- 📦 CI/CD with Jenkins

## How to Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Run Tests
```bash
npm run test
```

## How to Build
```bash
npm run build
```

## Docker Deployment
1. Build the Docker image:
   ```bash
   docker build -t app-router-portfolio .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 app-router-portfolio
   ```

## Jenkins CI/CD
- The `Jenkinsfile` automates install, test, build, and Docker image creation.

## Project Structure
```
app/
├── layout.tsx            # Root layout with navigation
├── page.tsx             # Home page
├── globals.css          # Global styles
├── animations.css       # Animation definitions
├── about/
│   ├── page.tsx        # About page
│   └── __tests__/      # About page tests
├── projects/
│   ├── page.tsx        # Projects page with timeline
│   └── __tests__/      # Projects page tests
└── components/
    ├── ActiveLink.tsx  # Navigation link with animations
    ├── Timeline.tsx    # Projects timeline component
    └── PageTransition.tsx # Page transition animations

public/
├── data/               # JSON data files
│   ├── about.json
│   ├── contacts.json
│   ├── projects.json
│   └── skills.json
└── images/            # Static images

Configuration Files:
├── jest.config.js     # Jest test configuration
├── next-env.d.ts      # Next.js TypeScript declarations
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
├── postcss.config.js  # PostCSS configuration
├── Dockerfile         # Docker configuration
└── Jenkinsfile        # Jenkins CI/CD pipeline
```

## Key Components

### Layout
- Sticky header with glass effect
- Smooth page transitions
- Responsive navigation with active state indicators

### Pages
- **Home**: Introduction and key features
- **About**: Personal information and skills
- **Projects**: Timeline of projects with animations

### Components
- `ActiveLink`: Animated navigation links with underline effects
- `Timeline`: Beautiful timeline component with animations
- `PageTransition`: Smooth page transition animations

### Styling
- Tailwind CSS for utility-first styling
- Custom animations using Framer Motion
- Gradient themes and glass morphism effects
- Responsive design for all screen sizes
- `__tests__/` - Unit tests for pages and components
- `Dockerfile` - Container build instructions
- `Jenkinsfile` - CI/CD pipeline

## App Router vs Pages Router: Key Differences

| Feature                | App Router (app/)                | Pages Router (pages/)              |
|------------------------|----------------------------------|------------------------------------|
| Routing                | File-based, nested layouts        | File-based, flat structure         |
| Layouts                | Powerful nested layouts           | Only `_app.tsx` and `_document.tsx`|
| Data Fetching          | Server Components, async/await    | getServerSideProps/getStaticProps  |
| File Structure         | `app/` directory, flexible        | `pages/` directory, flat           |
| Global CSS Import      | In `app/layout.tsx`               | Only in `pages/_app.tsx`           |
| API Routes             | `app/api/`                        | `pages/api/`                       |
| Dynamic Routing        | `[param]` folders, colocation     | `[param].tsx` files                |
| React Server Components| Supported                         | Not supported                      |
| Use Cases              | Recommended for new projects      | Legacy, still supported            |

### In This Project
- **App Router**: Uses the `app/` directory, nested layouts, and server components. More modern and flexible.
- **Pages Router**: Uses the `pages/` directory, classic Next.js routing, and only `_app.tsx` for global styles. Simpler, but less powerful for complex layouts.

---

**Created by a senior front-end engineer.**
