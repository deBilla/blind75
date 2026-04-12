# Blind 75 Visual

An interactive visual reference for all 75 essential LeetCode problems, organized by pattern.

**Live site:** https://deBilla.github.io/blind75

## Features

- **75 problems** across 13 categories (Arrays & Hashing, Two Pointers, Sliding Window, Stack, Binary Search, Linked List, Trees, Heap, Backtracking, Graphs, Dynamic Programming, Intervals, Bit Manipulation)
- **Animated visual demo** for every problem — watch the algorithm step through the data
- **In-browser Python execution** — edit and run solutions directly in the page (powered by [Pyodide](https://pyodide.org), no backend)
- **Pre-loaded test cases** for every problem
- **Step-by-step trace** with state, action, and result columns
- Time and space complexity for every solution

## Stack

- [Vite](https://vitejs.dev) + [React](https://react.dev)
- [React Router](https://reactrouter.com)
- [Pyodide](https://pyodide.org) — Python compiled to WebAssembly, runs entirely in the browser

## Local development

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via the included workflow (`.github/workflows/deploy.yml`).
