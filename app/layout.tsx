import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JSON Placeholder Todos',
  description: 'Powered by JSON Placeholder API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <main>{children}</main>
      </body>
    </html>
  );
}
