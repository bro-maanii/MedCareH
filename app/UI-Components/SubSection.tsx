import { Button } from "@/components/ui/button";
import { HeartPulse, PhoneCall, SquareActivity } from "lucide-react";
import React from "react";

export default function SubSection() {
  return (
    <>
      <section className="text-gray-600 body-font bg-blue-200">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300">
              <div className="h-full bg-blue-300 bg-opacity-75 px-8 pt-3 pb-24 rounded-lg overflow-hidden text-center relative">
                <SquareActivity className="w-16 h-14 text-blue-600 mb-1 " />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Hospitality
                </h1>
                <p className="leading-relaxed mb-3">
                  Clinical excellence must be the priority for any health care
                  service provider.
                </p>

                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <Button className="bg-blue-400 hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4  rounded shadow">
                    Apply for Bed{" "}
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300">
              <div className="h-full bg-blue-300 bg-opacity-75 px-8 pt-3 pb-24 rounded-lg overflow-hidden text-center relative">
                <PhoneCall className="w-16 h-14 text-green-600 mb-1" />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Emergency Care
                </h1>
                <p className="leading-relaxed mb-3">
                  Clinical excellence must be the priority for any health care
                  service provider.
                </p>

                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <Button className="bg-blue-400 hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4  rounded shadow">
                    +92-12345678900{" "}
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300">
              <div className="h-full bg-blue-300 bg-opacity-75 px-8 pt-3 pb-24 rounded-lg overflow-hidden text-center relative">
                <HeartPulse className="w-16 h-14 text-red-600 mb-1" />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Chamber Service
                </h1>
                <p className="leading-relaxed mb-3">
                  Clinical excellence must be the priority for any health care
                  service provider.
                </p>

                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <Button className="bg-blue-400 hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Make an Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
