import { Facebook, Hotel, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact-us" className="bg-gray-900 text-white ">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Hotel className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">Med Care Hospital</span>
          </div>
          <address className="not-italic text-sm text-gray-400">
            <p>123 Main St.</p>
            <p>Anytown, PAKISTAN 12345</p>
          </address>
          <div className="mt-4 text-sm text-gray-400">
            <p>
              Phone:{" "}
              <a className="hover:text-blue-500 font-medium" href="#">
                +92 (000) 555-1234
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="hover:text-blue-500 font-medium" href="#">
                info@medCarehospital.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Emergency Care
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Surgery
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Imaging
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Physical Therapy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Our Mission
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Our History
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Awards & Recognitions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Get in Touch
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Directions
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Schedule an Appointment
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-medium" href="#">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 MedCare Hospital. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link className="hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" href="#">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link className="hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" href="#">
              <X className="h-6 w-6" />
            </Link>
            <Link className="hover:text-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" href="#">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link className="hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" href="#">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )}

