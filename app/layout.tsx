import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flight to Autonomy",
  description: "Emrys Cruz's Autonomous Drone Build Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      //style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      <body className="h-full flow-root">
        <NavBar />
        <main className="min-h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
