import React from "react";

const ChooseUsSection = () => {
  return (
    <div className="max-w-6xl 2xl:max-w-7xl mx-auto py-32">
      <div className="flex flex-col gap-3">
        <div className="relative w-fit">
          <h1 className="font-bold text-3xl z-0">
            Schedule A Lead Generation Demo
          </h1>
          <img
            src="/element1.svg"
            className="-z-10 w-16 absolute -top-7 -right-14"
          />
        </div>
        <div><p className="font-medium">Are You a <span className="text-my-blue">Perfect Fit</span> for Our Expert Lead Generation Services?</p>
        <p>We only work with companies that we can guarantee success for. Please book a meeting so that we can direct you to the right person in our company.</p></div>

      </div>
    </div>
  );
};

export default ChooseUsSection;
