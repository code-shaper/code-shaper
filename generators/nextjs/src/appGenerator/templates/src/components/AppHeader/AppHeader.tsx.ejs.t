'use client';

export function AppHeader() {
  return (
    <header className="border-border w-full border-b">
      <div className="container flex h-14 max-w-screen-xl items-center">
        <span className="font-bold"><%= itemNameCapitalCase %></span>
      </div>
    </header>
  );
}
