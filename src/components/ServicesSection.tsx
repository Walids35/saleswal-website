import { UsersRound } from "lucide-react";
import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <div className="w-full bg-slate-50 py-32 ">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl flex flex-col items-center text-center gap-3 bg-[url('/element3.svg')]">
        <h2 className="text-4xl font-extrabold leading-tight text-slate-950 ">
          <span className="text-my-blue">Lead generation </span> <br /> services
          that win clients
        </h2>
        <p className="w-full sm:w-1/2">
          You can put all your energy into scaling your business while we set up
          a consistent stream of vetted business leads to your pipeline.
        </p>
        {/**Cards */}
        <div className="mt-10 flex flex-col gap-20">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img src="/service1.svg" />
            </div>
            <div className="flex flex-col gap-5 p-5 text-start">
                <h2 className="font-bold text-2xl">Market Research and Data Enrichement</h2>
                <h6 className="font-medium">Gain Invaluable Insights to Drive Your Business Forward</h6>
                <p className="text-sm">Understanding your market is crucial for success. Our comprehensive market research services provide you with the data you need to make informed decisions. We offer:</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5 items-start">
                      <img src="/blue-arrow.svg" className="mt-1" />
                      <p>Detailed Market Analysis: Identify trends, opportunities, and threats in your industry.</p>
                  </div>
                  <div className="flex gap-5 items-start">
                      <img src="/blue-arrow.svg" className="mt-1" />
                      <p>Customer Insights: Understand your target audience's needs, preferences, and behavior.</p>
                  </div>
                  <div className="flex gap-5 items-start">
                      <img src="/blue-arrow.svg" className="mt-1" />
                      <p>Crafting the perfect message with perfect deliverability</p>
                  </div>
                </div>
                <button className="bg-my-blue text-white font-medium py-2 px-4 mt-5 hover:bg-white hover:text-my-blue hover:underline duration-300 transition-all w-fit">
                Schedule A Call
              </button>
            </div>
          </div>
          {/**Card 2 */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-5 p-5 text-start">
                <h2 className="font-bold text-2xl">Customer Prospecting and Conversion</h2>
                <h6 className="font-medium">Reach and Convert Your Ideal Clients</h6>
                <p className="text-sm">Maximize your outreach and conversion rates with our approach. We utilize the latest tools and techniques to prospect and convert customers across various platforms, including:</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5 items-start">
                      <img src="/blue-arrow.svg" className="mt-1" />
                      <p>Email Marketing: Craft targeted email campaigns that resonate with your audience and drive conversions.</p>
                  </div>
                  <div className="flex gap-5 items-start">
                      <img src="/blue-arrow.svg" className="mt-1" />
                      <p>Send Personalized Messages at the Perfect Time Using AI</p>
                  </div>
                  <div className="flex gap-5 items-start">
                      <img src="/blue-arrow.svg" className="mt-1" />
                      <p>We combine AI and our expertise to send targeted messaging at the perfect time ensuring success.</p>
                  </div>
                </div>
                <button className="bg-my-blue text-white font-medium py-2 px-4 mt-5 hover:bg-white hover:text-my-blue hover:underline duration-300 transition-all w-fit">
                Schedule A Call
              </button>
            </div>
            <div>
              <img src="/service2.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
