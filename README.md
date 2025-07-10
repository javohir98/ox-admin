# Ox Admin

A React + TypeScript admin dashboard for managing products, built with Vite, Ant Design, and TanStack React Query.

## Features

- User authentication with token management
- Product listing with search, pagination, and filtering
- Responsive layout with Ant Design components
- Protected routes for authenticated users
- API integration using Axios
- Type-safe codebase with TypeScript

## Project Structure

```
.
├── public/
│   └── images/
├── src/
│   ├── api/           # API calls (auth, products, axios setup)
│   ├── components/    # Reusable components (PrivateRoute)
│   ├── helpers/       # Utility functions, menu config, types, router
│   ├── layout/        # Main layout component
│   ├── pages/         # Page components (Login, NotFound, Products)
│   ├── App.tsx        # App entry with providers
│   ├── main.tsx       # ReactDOM render
│   └── global.css     # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd ox-admin
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   Edit `.env` if needed (default API URL and subdomain are provided).

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

### Lint

To lint the codebase:

```sh
npm run lint
```

## Environment Variables

- `VITE_APP_BASE_URL` - Base URL for API requests
- `VITE_APP_SUBDOMAIN` - Subdomain for authentication

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Lint the code
- `npm run preview` - Preview production build

## License

MIT

---

**Note:**  
This project uses Ant Design, TanStack React Query, and Vite. See [`package.json`](package.json) for all dependencies.
