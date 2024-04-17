
import Navbar from "./UI-Components/Navbar";
import HeroSection from "./UI-Components/HeroSection";
import SubSection from "./UI-Components/SubSection";
import Subsection1 from "./UI-Components/SubSection1";
import Department from "./UI-Components/Department";
import cardiology from "../public/Cardiology.jpeg";
import dermatology from "../public/Dermatology.jpeg";
import gyne from "../public/Gynecology.jpeg";
import inetr from "../public/InternalMedicine.jpeg";
import neuro from '../public/Neurology.jpeg'
import onco from "../public/Oncology.jpeg";
import ortho from "../public/Orthopedics.jpeg";
import opht from "../public/Ophthalmology.jpeg";
import ped from '../public/Pediatrics.jpeg'
import psy from "../public/Psychiatry.jpeg";
import { Iitem } from "./UI-Components/Department";
import Pricing from "./UI-Components/Pricing";
import FancyTestimonialsSlider from "./UI-Components/TestimonialsSlider";
import TeamSlider from "./UI-Components/Team";
import Team_Cards from "./UI-Components/Team_Cards";

const data: Iitem[] = [
  {
      id: 1,
      name: "Cardiology",
      image: cardiology,
  },{
      id: 2,
      name: "Dermatology",
      image: dermatology,
  },{
      id: 3,
      name: "InternalMedicine",
      image: inetr,
  },{
      id: 4,
      name: "Gynaecology",
      image: gyne,
  },{
      id: 5,
      name: "Neurology",
      image: neuro,
  },{
      id: 6,
      name: "Oncology",
      image: onco,
  },{
      id: 7,
      name: "Orthopedics",
      image: ortho,
  },{
      id: 8,
      name: "Ophthalmology",
      image: opht,
  },{
      id: 9,
      name: "Pediatrics",
      image: ped,
  },{
      id: 10,
      name: "Psychiatry",
      image: psy,
  }
]
const testimonials = [
  {
    quote: "I have been to many hospitals, but this one stands out for its compassionate approach and efficient healthcare services. Highly recommended!",
    name: "John Doe",
  },
  {
    quote: "The quality of medical care provided at this hospital is top-notch. From diagnosis to treatment, I felt like I was in capable hands throughout.",
    name: "Sarah Johnson",
  },
  {
    quote: "I'm grateful for the personalized care I received at this hospital. They took the time to understand my needs and provided tailored solutions.",
    name: "Michael Brown",
  }
]
export default function Home() {
  return (
    <>
    {/* navbar */}
      <Navbar />
    {/* Hero Section */}
      <HeroSection />
    {/* overall */}
      <SubSection />
    {/* subsection1 */}
      <Subsection1  />
    {/* departments or services */}
      <Department props={data} />
    {/* Pricing */}
      <Pricing  />
    {/* Testimonial */}
      <FancyTestimonialsSlider testimonials={testimonials} />
    {/* Team */}
      <TeamSlider/>

    </>
  );
}
