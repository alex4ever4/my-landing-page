// app/layout.tsx
import './globals.css'; // Make sure this file exists or point to your main CSS

export const metadata = {
  title: 'My Landing Page',
  description: 'A modern landing page built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
