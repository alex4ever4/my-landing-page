// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Welcome to My Landing Page</h1>
      <p style={styles.description}>This is a modern React + Next.js App Router setup.</p>

      <div style={styles.counter}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={styles.count}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    padding: '2rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  count: {
    fontSize: '1.5rem',
  },
};
