<% if (useTailwindcss){ -%>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ----- Colors ----- */
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --border: 240 5.9% 90%;

    /* ----- Fonts ----- */
    --font-inter: Inter;
    --font-roboto-mono: 'Roboto Mono';
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground min-h-screen font-sans antialiased;
  }
}
<% } else { -%>
/*
  This file contains simple utility classes modeled after Tailwind CSS. We
  created it to style this simple app without adding dependencies to any
  external framework. Please replace with a styling solution of your choice.
*/

/* ----- Reset ----- */
*,
*:before,
*:after {
  box-sizing: border-box;
  border: 0 solid hsl(var(--border));
}

html {
  line-height: 1.5;
  font-family: var(--font-inter);
}

body {
  margin: 0;
  min-height: 100vh;
  line-height: inherit;
  color: var(--foreground);
  background-color: var(--background);
  font-family: var(--font-inter);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Remove the default font size and weight for headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/* Removes default margins */
h1,
h2,
h3,
h4,
h5,
h6,
p,
pre {
  margin: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* ----- Layout: Container ----- */
.container {
  width: 100%;
}

/* ----- Layout: Position ----- */
.relative {
  position: relative;
}

/* ----- Layout: Display ----- */
.flex {
  display: flex;
}

/* ----- Flexbox: Direction ----- */
.flex-col {
  flex-direction: column;
}

/* ----- Flexbox: Flex ----- */
.flex-1 {
  flex: 1 1 0%;
}

/* ----- Flexbox: Align Items ----- */
.items-center {
  align-items: center;
}

/* ----- Spacing: Padding ----- */
.py-4 {
  padding-top: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
}

.px-8 {
  padding-left: 2rem; /* 32px */
  padding-right: 2rem; /* 32px */
}

/* ----- Spacing: Margin ----- */
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

/* ----- Sizing: Width ----- */
.w-full {
  width: 100%;
}

/* ----- Sizing: Max-Width ----- */
.max-w-screen-xl {
  max-width: 1280px;
}

/* ----- Sizing: Height ----- */
.h-14 {
  height: 3.5rem; /* 56px */
}

/* ----- Sizing: Min-height ----- */
.min-h-screen {
  min-height: 100vh;
}

/* ----- Typography: Font Family ----- */
.font-sans {
  font-family: var(--font-inter);
}

/* ----- Typography: Font Weight ----- */
.font-bold {
  font-weight: 700;
}

/* ----- Typography: Text Color ----- */
.text-blue-600 {
  color: rgb(37 99 235);
}

/* ----- Borders: Width ----- */
.border-b {
  border-bottom-width: 1px;
}

:root {
  /* ----- Colors ----- */
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --border: 240 5.9% 90%;

  /* ----- Fonts ----- */
  --font-inter: Inter;
  --font-roboto-mono: 'Roboto Mono';
}
<% } -%>
