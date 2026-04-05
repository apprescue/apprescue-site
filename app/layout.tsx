import type { Metadata } from "next";
import { Anton } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingCta } from "@/components/floating-cta";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: {
    default: "AppRescue | Fixing Broken AI Apps, APIs & Cloud Systems",
    template: "%s | AppRescue",
  },
  description:
    "AppRescue fixes broken AI apps, API integrations, Firebase and Supabase failures, and modern cloud systems with secure AWS migration paths.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={anton.variable}>
        <Header />
        {children}
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
