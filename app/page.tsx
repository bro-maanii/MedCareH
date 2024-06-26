
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
import Appointment_map from "./UI-Components/Appointment_map";

// Deapartments 
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
// Testinomials
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/testinomials");
  return res.json();
};
// specialist doctors
const getDoctor = async () => {

  const res = await fetch("http://localhost:3000/api/Doctors");
  return res.json();
};


export default async function Home() {
  const ClientSaying = await getData();
  const Doctors = await getDoctor();
  return (
    <>
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
      <FancyTestimonialsSlider testimonials={ClientSaying} />
    {/* Team */}
      <TeamSlider props={Doctors}/>
    {/* Appointment Form */}
      <Appointment_map />
    </>
  );
}
