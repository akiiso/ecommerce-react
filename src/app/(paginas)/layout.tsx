import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/navbar/footer";
import { IconAlarm } from "@tabler/icons-react";

const font = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-commerce",
  description: "projeto de e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={`flex flex-col ${font.className} antialiased  gap-4`}>
        <Navbar qtdeItens={24} />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
