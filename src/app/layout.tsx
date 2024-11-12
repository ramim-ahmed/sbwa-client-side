import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";

const inter = Inter({ subsets: ["latin"], weight: ['100', "200", "300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "SBWA | Scottish Bangladesh Welfare Association",
  description: "SBWA-Scottish Bangladeshi Welfare Association",
  icons: {
    icon: "/images/fabicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <MobileHeader />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
