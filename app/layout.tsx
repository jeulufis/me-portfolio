import type { Metadata } from "next";
import "./globals.css";

import { Quicksand } from "next/font/google";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

const inter = Quicksand({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Eulufi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={
          inter.className +
          "antialiased max-w-2xl mb-40 flex flex-col md:flex-row mt-8 mx-auto"
        }
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
