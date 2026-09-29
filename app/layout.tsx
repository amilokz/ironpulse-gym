import type { Metadata } from "next";
import { Anton, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IronPulse Fitness Studio | Train Like a Beast — Gym in Bahria Town, Rawalpindi",
  description:
    "IronPulse Fitness Studio in Bahria Town, Rawalpindi — strength training, HIIT, boxing, yoga and personal coaching. 12,000 sq ft of iron. Join now on WhatsApp.",
  openGraph: {
    title: "IronPulse Fitness Studio — Train Like a Beast",
    description:
      "Rawalpindi's hardest-working gym. Strength, HIIT, boxing, yoga & personal training in Bahria Town.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-coal-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
