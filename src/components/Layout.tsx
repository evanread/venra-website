import React from 'react';
import { Outlet } from 'react-router-dom';
import { Banner } from './Banner';
import { Nav } from './Nav';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <div className="sticky top-0 z-50 bg-gradient-to-br from-blue-900 to-indigo-900">
        <Nav />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}