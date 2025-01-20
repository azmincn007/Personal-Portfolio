import { Metadata } from 'next'
import {  Montserrat } from "next/font/google";
import "./globals.css";




const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Azmin CN',
    default: 'Azmin CN',
  },
  description: 'Azmin CN - Personal Portfolio',
  keywords: 'Full Stack Developer, Web Developer, React Developer, Next.js, Node.js, Muhamed Azmin',
  authors: [{ name: 'Muhamed Azmin' }],
  creator: 'Muhamed Azmin',
  openGraph: {
    title: 'Azmin CN',
    description: 'Azmin CN - Personal Portfolio',
    url: 'https://azmincn.netlify.app/',
    siteName: 'Azmin CN',
    images: [
      {
        url: 'https://azmincn.netlify.app/assets/azmincn.png',
        width: 1200,
        height: 630,
        alt: 'Azmin CN',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhamed Azmin | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies',
    images: [
      {
        url: 'https://azmincn.netlify.app/assets/azmincn.png',
       
        alt: 'Azmin CN',
      },
    ],  }
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
