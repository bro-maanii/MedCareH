import React from "react";
import Image, { StaticImageData } from "next/image";

export interface Iitem{
    id: number;
    name: string;
    image: any;
}


export default function Department({ props }: { props: Iitem[] }) {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col justify-center items-center gap-4 pt-4 lg:pt-11">
        <h1 className="text-4xl font-bold ">Department</h1>
        <p className="text-lg lg:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          omnis rerum quos, assumenda cum tempore deserunt. Quasi sequi,
          obcaecati veniam dicta in deserunt quo quia ipsum quaerat possimus
          eaque illum.
        </p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center align-middle items-center -m-4">
            {props.map((item) => (
                <div key={item.id} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-10/12 p-4 ">
                <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt={item.name}
                  className="object-cover object-center w-full h-full block transition ease-in-out delay-200 hover:-translate-y-2 hover:scale-90 hover:shadow-2xl hover:shadow-red-800 duration-500"
                  src={item.image}
                  width="600"
                  height="400"
                />
              </a>
              <div className="mt-4 flex flex-col justify-center items-center align-middle">
                
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.name}
                </h2>
                <p className="mt-1 w-11/12">Esteem spirit temper too say adieus who direct esteem.</p>
              </div>
            </div>
            ))}
            
            
          </div>
        </div>
      </section>
    </div>
  );
}
