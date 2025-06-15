import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CWP Academy Legal",
  keywords: ["CWP Academy", "Legal", "Privacy Policy", "Terms of Service"],
  authors: [{ name: "CWP Academy" }],
  creator: "CWP Academy",
  publisher: "CWP Academy",
  openGraph: {
    title: "CWP Academy Legal",
    description: "Official legal site for CWP Academy, including privacy policies and terms of service.",
    url: "https://cwpacademy.com/legal",
    siteName: "CWP Academy Legal",
    images: [
      {
        url: "https://cwpacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "CWP Academy Logo",
      },
    ],
    type: "website",
  },
      description: "Official legal site for CWP Academy, including privacy policies and terms of service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
