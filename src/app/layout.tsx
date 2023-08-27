// These styles apply to every route in the application
import './globals.css';
import Header from '@/components/layout/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Header */}
        <Header />
        {children}
        </body>
    </html>
  );  
}
  