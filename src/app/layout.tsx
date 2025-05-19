import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris and Hadi are getting married!",
  description: "Eww... weird.",
  openGraph: {
    title: "Chris and Hadi are getting married!",
    description: "Eww... weird.",
    url: "https://mostunlikely.party",
    siteName: "Our Unlikely Little Party",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
