import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Adcraze | Performance-First Digital Advertising Agency",
  description:
    "Adcraze powers growth for lean teams with accountable, performance-based advertising.",
  metadataBase: new URL("https://agentic-3e3623e4.vercel.app"),
  openGraph: {
    title: "Adcraze | Performance-First Digital Advertising Agency",
    description:
      "Performance-based advertising that scales your revenue—not your costs.",
    url: "https://agentic-3e3623e4.vercel.app",
    siteName: "Adcraze",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adcraze | Performance-First Digital Advertising Agency",
    description:
      "Performance-based advertising that scales your revenue—not your costs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
