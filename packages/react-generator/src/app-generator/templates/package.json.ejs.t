{
  "name": "<%= packageName %>",
  "description": "<%= appName %>",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "clean": "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.3.0",
  },
  "devDependencies": {
    "@types/react": "^18.0.7",
    "@types/react-dom": "^18.0.2",
    "@vitejs/plugin-react": "^1.3.1",
    "tsconfig": "*",
    "typescript": "^4.6.3",
    "vite": "^2.9.5"
  }
}
