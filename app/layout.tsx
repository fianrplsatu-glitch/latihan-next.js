import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';

const poppins = localFont({
  src: [
    { path: './fonts/Poppins-Regular.ttf', weight: '400' },
    { path: './fonts/Poppins-Bold.ttf', weight: '700' },
  ],
});

export const metadata: Metadata = {
  title: 'EventKu',
  description: 'Katalog dan pemesanan tiket event sekolah',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="id" className="antialiased">
      <body
        className={`${poppins.className} flex min-h-screen flex-col bg-slate-50 text-slate-800`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 p-6">{children}</main>
        <footer className="border-t bg-white p-4 text-center text-sm text-slate-500">
          EventKu · dibuat di kelas Junior Web Developer
        </footer>
      </body>
    </html>
  );
}
