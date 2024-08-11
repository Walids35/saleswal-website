import ServicesSection from "@/components/ServicesSection";
import BoxReveal from "@/components/magicui/BoxReveal";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { FadeText } from "@/components/magicui/fade-text";
import QuoteSection from "@/components/QuoteSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import Image from "next/image";
import ArrowAnimation from "@/components/ArrowAnimation";

export const metadata: Metadata = {
  title: "SalesWal | Home",
  description: "Generated by create next app",
};

export default function Index() {
  const title = useTranslations("Landing.title");
  const text = useTranslations("Landing");
  return (
    <>
      <div>
        {/** This is the landing section */}
        <div
          className="grid sm:grid-cols-1 xl:grid-cols-2 items-center gap-16 max-w-6xl 2xl:max-w-7xl mx-auto bg-[url('/bg.svg')] bg-no-repeat xl:bg-[left_top_8rem] 2xl:bg-[left_top_12rem]"
          style={{ minHeight: "90vh" }}
        >
          <div>
            <div>
              <p className="text-gray-400">Multichannel Marketing Services</p>
              <div className="flex flex-wrap gap-2 sm:text-7xl font-extrabold text-5xl ">
                <h1 className="mr-4">{title("first")}</h1>
                <BoxReveal boxColor={"#297bff"} duration={0.5}>
                  <p className="text-my-blue ">{title("second")}</p>
                </BoxReveal>
              </div>
              <div className="flex flex-col gap-2 text-5xl sm:text-7xl font-extrabold mt-2 mb-5">
                <h1>{title("third")}</h1>
                <BoxReveal boxColor={"#297bff"} duration={0.5}>
                  <p className="text-my-blue">{title("fourth")}</p>
                </BoxReveal>
              </div>
              <FadeText
                className="font-medium text-base sm:text-lg text-justify"
                direction="left"
                text={text("subtitle")}
              />

              <button className="bg-my-blue text-white font-medium py-2 px-4 mt-5 hover:bg-white hover:text-my-blue hover:underline duration-300 transition-all">
                {text("button")}
              </button>
            </div>
          </div>
          {/** This is the video section */}
          <div className="relative z-0">
            <video
              playsInline
              disablePictureInPicture
              src="https://videos.gotolstoy.com/public/0bd40674-5491-46ef-8e12-cde981f6c3b0/30a7ddbe-1eb7-4f73-ab39-0165e4adc4b0/30a7ddbe-1eb7-4f73-ab39-0165e4adc4b0_640.mp4"
            />
            <img src="/element1.svg" className="absolute -top-5 -right-10 z-10" />
            <img src="/element2.svg" className="absolute -bottom-5 -right-10 z-10" />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <ArrowAnimation />
        </div>

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
