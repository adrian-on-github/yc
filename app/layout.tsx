import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import "easymde/dist/easymde.min.css";
import { Toaster } from "sonner";

const workSans = localFont({
  src: [
    { path: "@/app/fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
    {
      path: "@/app/fonts/WorkSans-Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    { path: "@/app/fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "@/app/fonts/WorkSans-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "@/app/fonts/WorkSans-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "@/app/fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "@/app/fonts/WorkSans-Thin.ttf", weight: "300", style: "normal" },
    {
      path: "@/app/fonts/WorkSans-Extralight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

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
      <body className={workSans.variable}>
        {children} <Toaster />
      </body>
    </html>
  );
}
