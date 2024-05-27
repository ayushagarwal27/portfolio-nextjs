import React from "react";
import Github from "../../assets/icons/github.png";
import Image from "next/image";

const SocialLinks = () => {
  const iconDetails = [{ label: "Github", link: Github }];
  return (
    <div>
      {iconDetails.map((icon) => (
        <div
          key={icon.label}
          className={
            "flex flex-col justify-center items-center p-4 border-2 border-black rounded-lg cursor-pointer hover:bg-black w-fit"
          }
        >
          <Image src={icon.link} alt={icon.label} className={"h-6 w-6"} />
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
