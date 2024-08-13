"use client"
import Image from "next/image";
import React from "react";
import { InlineWidget } from "react-calendly";

const ChooseUsSection = () => {
  return (
    <div className="schedulecall max-w-6xl 2xl:max-w-7xl mx-auto py-32">
      <div className="flex flex-col gap-3">
        <div className="relative w-fit">
          <h1 className="font-bold text-3xl z-0">
            Schedule A Lead Generation Demo
          </h1>
          <Image
            src="/element1.svg"
            className="-z-10 w-16 absolute -top-7 -right-14"
            alt="element1"
            width={100}
            height={50}
          />
        </div>
        <div><p className="font-medium">Are You a <span className="text-my-blue">Perfect Fit</span> for Our Expert Lead Generation Services?</p>
        <p>We only work with companies that we can guarantee success for. Please book a meeting so that we can direct you to the right person in our company.</p></div>
        <InlineWidget styles={{height: "690px"}} url="https://calendly.com/wsiala4/we-find-customers-for-you" />
      </div>
    </div>
  );
};

export default ChooseUsSection;
