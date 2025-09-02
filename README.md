# App Router Portfolio

A beautiful and colorful web portfolio built with React, Next.js (App Router), Tailwind CSS, and TypeScript.

## Features
- Modern design with vibrant colors
- Home, About, and Projects pages
- Navigation bar
- Fully typed with TypeScript
- Unit tests for all components
- Ready for Docker deployment and CI/CD with Jenkins

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
- `app/` - Next.js App Router pages and layouts
- `components/` - Shared React components
- `public/` - Static assets
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
