import type { Metadata } from "next";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and grow!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <Toaster />
      </body>
    </html>
  );
}
