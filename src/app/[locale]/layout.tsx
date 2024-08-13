import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SalesWal",
    template: "%s | SalesWal"
  },
  description: "Leads Today. Revenues Tomorrow. Unlock your business's true potential with our growth strategies, driving unparalleled leads and skyrocketing revenues tailored just for you.",
  generator: "Next.js",
  applicationName: "SalesWal",
  referrer: "origin-when-cross-origin",
  keywords: ["SalesWal", "Lead Generation", "Marketing", "cold email", "growth strategy", "b2b lead generation","Customer prospection and conversion"],
  authors: [{name: "Walid Siala"}],
  creator: "Walid Siala",
  publisher: "Walid Siala",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="min-h-screen montserrat">
          <Navbar />
          <div className="flex-grow pt-32 xl:pt-0 p-5 xl:p-0">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
