import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume Optimizer Pro",
  description: "AI-powered ATS resume optimization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Header />
        <body className={inter.className}>{children}</body>
        <Footer />
      </html>
    </ClerkProvider>
  );
}
