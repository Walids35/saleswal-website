import ServicesSection from "@/components/ServicesSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

import QuoteSection from "@/components/QuoteSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import Image from "next/image";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Home | SalesWal"
};

export default function Index() {
  
  return (
    <>
      <div>
        <LandingPage />
        {/** This is the services section */}
        <div className="mt-20">
          <QuoteSection />    
          <ServicesSection />
          <ChooseUsSection />
        </div>
      </div>
    </>
  );
}
