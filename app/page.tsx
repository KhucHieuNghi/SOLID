import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";

import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solidblock",
  description: "CloudStorage + ALCombination",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features></Features>
      {/* <Testimonials /> */}
      <Roadmap></Roadmap>
      <Team></Team>
      {/* <Contact /> */}
    </>
  );
}
