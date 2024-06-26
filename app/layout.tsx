import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import Tailwind from "primereact/passthrough/tailwind";
import 'primeicons/primeicons.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          <Header />
          {children}
          <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
