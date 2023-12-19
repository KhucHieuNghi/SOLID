
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solidblock",
  description: "Engineering a better future",
  // other metadata
};

const AboutPage = () => {
  return (
    
      <Breadcrumb
        pageName="About solidblock"
        description="SolidBlock is a Crypto-Tech company fully registered in the US as solidblock technologies, building a new decentralized cloud computing platform that leverages AI technology for secure and efficient data storage and processing. The platform is designed to provide a secure, transparent, and efficient way for users to store and share data without relying on centralized third-party providers."
      />
    
    
  );
};

export default AboutPage;
