import React from "react";

import { DownloadIcon } from "@/assets/icons";

const NavButton = () => {
  return (
    <button
      className={
        "flex flex-row items-center px-5 py-4 bg-black text-white gap-2 rounded-lg h-[56px]"
      }
    >
      <span className={"text-[20px]"}>Resume</span>
      <DownloadIcon color={"black"} className={"h-5 w-5"} />
    </button>
  );
};

export default NavButton;
