import React from "react";
import IntroText from "@/components/HeroSection/IntroText";
import Image from "next/image";
import Banner from "../../assets/appImages/Banner.png";
import SocialLinks from "@/components/HeroSection/SocialLinks";

const HeroSection = () => {
  return (
    <div className={"flex flex-row max-w-screen-xl mx-auto mt-[60px]"}>
      <div className={"flex flex-col gap-14"}>
        <IntroText />
        <SocialLinks />
      </div>
      <Image
        src={Banner}
        width={800}
        height={900}
        alt={"banner"}
        className={"-mr-2"}
      />
    </div>
  );
};

export default HeroSection;
