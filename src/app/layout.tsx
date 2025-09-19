import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Kafa's Portfolio`,
  description: "This is my portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} antialiased overflow-x-hidden`}>
        {/* <div className="w-screen min-h-screen px-7 md:px-12 lg:px-43 text-foreground relative"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
