import Image from "next/image";
import Navbar from "./UI-Components/Navbar";
import HeroSection from "./UI-Components/HeroSection";
import SubSection from "./UI-Components/SubSection";

export default function Home() {
  return (
    <>
    {/* navbar */}
      <Navbar />
    {/* Hero Section */}
      <HeroSection />
    {/* overall */}
      <SubSection />
    </>
  );
}
