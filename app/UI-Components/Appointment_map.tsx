import React from "react";
import { Appointment_Form } from "./appointment_form";

export default function Appointment_map() {
  return (
    <section className="text-gray-600 body-font relative bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/4 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479.322662626051!2d67.36087284999999!3d24.869632399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3333cee24fc11%3A0xa351c205b697b799!2sGulshan-e-Hadeed%20Bin%20Qasim%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1713728705006!5m2!1sen!2s"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-sm">
                123 King Faisal Road, Gulshan-e-Hadeed, Karachi, Pakistan
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-xs text-indigo-500 leading-relaxed">
                MedCareHospital@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="text-sm leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4  bg-white flex flex-col lg:ml-auto w-full  mt-8 md:mt-0">
          <Appointment_Form />
        </div>
      </div>
    </section>
  );
}
