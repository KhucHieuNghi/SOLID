import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
// images/logo/image.png

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
      <Roadmap></Roadmap>
      <Team></Team>
    </>
  );
}
