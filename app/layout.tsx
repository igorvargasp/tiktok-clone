import type { Metadata } from "next";
import "./globals.css";
import AuthOverlay from "./components/AuthOverlay";

export const metadata: Metadata = {
  title: "TikTok Clone",
  description: "TikTok Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthOverlay />
      <body>{children}</body>
    </html>
  );
}
