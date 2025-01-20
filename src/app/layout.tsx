import { Metadata } from 'next'
import {  Montserrat } from "next/font/google";
import "./globals.css";




const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Muhamed Azmin | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies. Check out my portfolio and projects.',
  keywords: 'Full Stack Developer, Web Developer, React Developer, Next.js, Node.js, Muhamed Azmin',
  authors: [{ name: 'Muhamed Azmin' }],
  creator: 'Muhamed Azmin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azmincn.netlify.app/',
    title: 'Muhamed Azmin | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies',
    siteName: 'Muhamed Azmin Portfolio',
    images: [
      {
        url: '/Azmincn.png',
        width: 1200,
        height: 630,
        alt: 'Muhamed Azmin - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhamed Azmin | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies',
    images: ['/Azmincn.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
