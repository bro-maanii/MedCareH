import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, Heart, HeartCrack, Scissors } from "lucide-react";
import React from "react";

export default function Pricing() {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden pb-8">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            We Provide You The Best Treatment In Reasonable Price
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Pricing card 1 */}
            <div className="p-4 flex justify-center w-full md:w-2/6 transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300">
              <div className="h-full p-6 hover:border-2 hover:border-indigo-500 border-2 border-gray-300 rounded-lg  flex flex-col relative overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-gray-900 mb-1 leading-none">
                    <Scissors className="w-16 h-16 text-blue-600 mb-1" />
                </h1>
                <h2 className="text-base md:text-lg  tracking-widest title-font  pb-1 mb-2  font-medium">
                    Plastic Surgery 
                </h2>
                <h1 className="text-base md:text-xl xl:text-2xl text-gray-900 leading-none flex items-center pb-4 mb-4 ">
                  <span className="text-base font-semibold text-blue-500 md:text-xl xl:text-2xl">$199</span>
                  <span className="text-sm md:text-lg  ml-1 font-normal text-gray-500">
                    / Per Visit
                  </span>
                </h1>
                </div>
                <p className="flex items-center text-gray-600 mb-2">
                    <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                    Vexillologist pitchfork
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                  Tumeric plaid portland
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  
                <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                  Mixtape chillwave tumeric
                </p>
                <Button className="flex justify-center items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">
                Book Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably havent heard of them jean shorts.
                </p>
              </div>
            </div>
            {/* Pricing card 2 popular */}
            <div className="p-4 flex justify-center w-full md:w-2/6 transition -translate-y-1 scale-110  duration-300">
              <div className="h-full p-6 rounded-lg  border-2 border-gray-300 hover:border-2 hover:border-indigo-500 flex flex-col relative overflow-hidden">
                {/* Badge */}
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-gray-900 mb-1 leading-none">
                    <Brain className="w-16 h-16 text-blue-600 mb-1" />
                </h1>
                <h2 className="text-base md:text-lg  tracking-widest title-font  pb-1 mb-2  font-medium">
                    Neurology 
                </h2>
                <h1 className="text-base md:text-xl xl:text-2xl text-gray-900 leading-none flex items-center pb-4 mb-4 ">
                  <span className="text-base font-semibold text-blue-500 md:text-xl xl:text-2xl">$299</span>
                  <span className="text-sm md:text-lg  ml-1 font-normal text-gray-500">
                    / Per Visit
                  </span>
                </h1>
                </div>
                
                {/* details */}
                <p className="flex items-center text-gray-600 mb-2">
                    <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                    Vexillologist pitchfork
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                  Tumeric plaid portland
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                  Tumeric plaid portland
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  
                <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                  Mixtape chillwave tumeric
                </p>
                
                <Button className="flex justify-center items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">
                Book Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably havent heard of them jean shorts.
                </p>
              </div>
            </div>
            {/* Pricing card 3 */}
            <div className="p-4 flex justify-center w-full md:w-2/6 transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300">
              <div className="h-full p-6 hover:border-2 hover:border-indigo-500 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-gray-900 mb-1 leading-none">
                  <HeartCrack className="w-16 h-16 text-blue-600 mb-1" />
                </h1>
                <h2 className="text-base md:text-lg  tracking-widest title-font  pb-1 mb-2  font-medium">
                Heart Surgery
                </h2>
                <h1 className="text-base md:text-xl xl:text-2xl text-gray-900 leading-none flex items-center pb-4 mb-4 ">
                  <span className="text-base font-semibold text-blue-500 md:text-xl xl:text-2xl">$399</span>
                  <span className="text-sm md:text-lg  ml-1 font-normal text-gray-500">
                    / Per Visit
                  </span>
                </h1>
                </div>
                <p className="flex items-center text-gray-600 mb-2">
                    <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                    Vexillologist pitchfork
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                    <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                  Lorem ipsum dolor.
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                  Tumeric plaid portland
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  
                <CheckCircle className="w-4 h-5 text-blue-600 mb-1 mr-2 inline-flex items-center justify-center flex-shrink-0" />
                  Mixtape chillwave tumeric
                </p>
                <Button className="flex justify-center items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">
                Book Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably havent heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
