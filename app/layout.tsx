import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Hospital Admin Panel',
  description: 'Advanced patient management system for multi-branch dental hospitals.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
