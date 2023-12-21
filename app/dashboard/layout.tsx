import React from 'react';
import SideNav from './sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Partial rendered #1 */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      {/* Partial rendered #2 */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
