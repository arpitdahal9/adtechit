import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Arpit Dahal | Systems Administrator & Security Operations",
  description: "Portfolio of Arpit Dahal, a Systems Administrator specializing in Infrastructure, Security Operations, and GRC.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://arpitdahal.com",
    title: "Arpit Dahal | Systems Administrator",
    description: "Systems Administrator & Security Operations Professional.",
    siteName: "Arpit Dahal Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, "bg-background text-primary font-sans overflow-x-hidden")}>
        {children}
      </body>
    </html>
  );
}
