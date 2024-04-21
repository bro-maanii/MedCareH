import Link from "next/link"
import img1 from "../../public/1.png.webp";
import img2 from "../../public/2.png.webp";
import Image from "next/image";

export default function Subsection1() {
  return (
    <section className="w-full py-12 lg:py-16 xl:py-20 bg-white">
      <div className="container grid lg:grid-cols-3 xl:grid-cols-2 items-center gap-4 lg:px-6">
        <div className="grid gap-4 lg:col-span-2 xl:col-span-1 md:gap-2 lg:gap-4 items-center lg:justify-normal justify-center ">
          <div className="grid gap-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Best Care For Your Good Health</h2>
            <p className="text-gray-500 md:w-[600px] dark:text-gray-400">
              Your health is your wealth. We are committed to providing you with the best care to keep you healthy and
              happy. Our team of experienced healthcare professionals is dedicated to your well-being, offering
              personalized care and support at every step.
            </p>
          </div>
          <div className="flex flex-col justify-center lg:justify-normal gap-2 min-[400px]:flex-row pb-6">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-flow-col justify-center align-middle items-center gap-4 md:gap-2">
          <div className="w-full rounded-lg overflow-hidden shadow-lg transform rotate-3 -translate-x-4 -translate-y-4">
            <Image
              alt="Image"
              className="aspect-[4/3] rounded-lg object-cover object-center transition hover:-rotate-12 ease-in-out delay-200 hover:-translate-y-2 hover:scale-90  duration-500"
              height="400"
              src={img1}
              width="600"
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden shadow-lg transform  -rotate-3 translate-x-4 translate-y-4">
            <Image
              alt="Image"
              className="aspect-[4/3] rounded-lg object-cover object-center transition hover:-rotate-12 ease-in-out delay-200 hover:-translate-y-2 hover:scale-90  duration-500"
              height="400"
              src={img2}
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}



