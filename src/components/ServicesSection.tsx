"use client";
import { useScroll, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const serviceOne = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const serviceTwo = useScroll({
    target: ref2,
    offset: ["start end", "end end"],
  });

  const controls = useAnimation();
  const controlsTwo = useAnimation()
  const textRef = useRef(null);
  const isTextInView = useInView(textRef);
  const textTwoRef = useRef(null);
  const isTextTwoInView = useInView(textTwoRef);

  useEffect(() => {
    if (isTextInView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1.5 },
      });
    }
  }, [controls, isTextInView]);

  useEffect(() => {
    if (isTextTwoInView) {
      controlsTwo.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      });
    }
  }, [controlsTwo, isTextTwoInView]);

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
            <motion.div
              ref={ref}
              style={{
                scale: serviceOne.scrollYProgress,
                opacity: serviceOne.scrollYProgress,
              }}
            >
              <Image
                src="/service1.svg"
                height={400}
                width={700}
                alt="market research image"
              />
            </motion.div>
            <motion.div
              ref={textRef}
              initial={{ x: 100, opacity: 0 }}
              animate={controls}
              className="flex flex-col gap-5 p-5 text-start"
            >
              <h2 className="font-bold text-2xl">
                Market Research and Data Enrichement
              </h2>
              <h6 className="font-medium">
                Gain Invaluable Insights to Drive Your Business Forward
              </h6>
              <p className="text-sm">
                Understanding your market is crucial for success. Our
                comprehensive market research services provide you with the data
                you need to make informed decisions. We offer:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-5 items-start">
                  <Image
                    src="/blue-arrow.svg"
                    className="mt-1"
                    height={20}
                    width={40}
                    alt="arrow"
                  />
                  <p>
                    Detailed Market Analysis: Identify trends, opportunities,
                    and threats in your industry.
                  </p>
                </div>
                <div className="flex gap-5 items-start">
                  <Image
                    src="/blue-arrow.svg"
                    className="mt-1"
                    height={20}
                    width={40}
                    alt="arrow"
                  />
                  <p>
                    Customer Insights: Understand your target audience needs,
                    preferences, and behavior.
                  </p>
                </div>
                <div className="flex gap-5 items-start">
                  <Image
                    src="/blue-arrow.svg"
                    className="mt-1"
                    height={20}
                    width={40}
                    alt="arrow"
                  />
                  <p>
                    Crafting the perfect message with perfect deliverability
                  </p>
                </div>
              </div>
              <button
                className="bg-my-blue text-white font-medium py-2 px-4 mt-5 hover:bg-white hover:text-my-blue hover:underline duration-300 transition-all w-fit"
                onClick={() => {}}
              >
                Schedule A Call
              </button>
            </motion.div>
          </div>
          {/**Card 2 */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              ref={textTwoRef}
              initial={{ x: -100, opacity: 0 }}
              animate={controlsTwo} className="flex flex-col gap-5 p-5 text-start">
              <h2 className="font-bold text-2xl">
                Customer Prospecting and Conversion
              </h2>
              <h6 className="font-medium">
                Reach and Convert Your Ideal Clients
              </h6>
              <p className="text-sm">
                Maximize your outreach and conversion rates with our approach.
                We utilize the latest tools and techniques to prospect and
                convert customers across various platforms, including:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-5 items-start">
                  <Image
                    src="/blue-arrow.svg"
                    className="mt-1"
                    height={20}
                    width={40}
                    alt="arrow"
                  />
                  <p>
                    Email Marketing: Craft targeted email campaigns that
                    resonate with your audience and drive conversions.
                  </p>
                </div>
                <div className="flex gap-5 items-start">
                  <Image
                    src="/blue-arrow.svg"
                    className="mt-1"
                    height={20}
                    width={40}
                    alt="arrow"
                  />
                  <p>Send Personalized Messages at the Perfect Time Using AI</p>
                </div>
                <div className="flex gap-5 items-start">
                  <Image
                    src="/blue-arrow.svg"
                    className="mt-1"
                    height={20}
                    width={40}
                    alt="arrow"
                  />
                  <p>
                    We combine AI and our expertise to send targeted messaging
                    at the perfect time ensuring success.
                  </p>
                </div>
              </div>
              <button className="bg-my-blue text-white font-medium py-2 px-4 mt-5 hover:bg-white hover:text-my-blue hover:underline duration-300 transition-all w-fit">
                Schedule A Call
              </button>
            </motion.div>
            <motion.div
              ref={ref2}
              style={{
                scale: serviceTwo.scrollYProgress,
                opacity: serviceTwo.scrollYProgress,
              }}
            >
              <Image
                src="/service2.svg"
                height={400}
                width={700}
                alt="market research image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
