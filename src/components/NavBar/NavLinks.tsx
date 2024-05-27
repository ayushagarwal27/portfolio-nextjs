import React from "react";
import Link from "next/link";

const NavLinks = () => {
  const navLinkData = [
    { label: "About Me", url: "#about-me" },
    { label: "Skills", url: "#skills" },
    { label: "Project", url: "#project" },
    { label: "Contact Me", url: "#contact-me" },
  ];
  return (
    <div className={"flex-row flex gap-[32px]"}>
      {navLinkData.map((link) => (
        <Link
          key={link.label}
          href={link.url}
          className={"text-[20px] font-medium"}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
