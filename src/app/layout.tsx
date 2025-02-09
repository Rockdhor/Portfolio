import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "allen schmerler | portfolio",
  description: "Software Engineer Allen Schmerler's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-dark`}>
        {children}
      </body>
    </html>
  );
}
