import React from "react";

const IntroText = () => {
  return (
    <div className={"flex flex-col gap-8"}>
      <div className={"flex flex-col text-[48px] gap-[16px]"}>
        <p>
          <span>Hello I’am</span>{" "}
          <span className={"font-extrabold"}>Ayush</span>
        </p>
        <p>
          <span className={"font-extrabold "}>Frontend</span>{" "}
          <span>Developer</span>
        </p>
        <p>
          <span>Based In</span> <span className={"font-extrabold"}>India</span>
        </p>
      </div>

      <p className={"text-[16px] font-medium text-gray-500 leading-6 -mr-8"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
        necessitatibus numquam! Atque, deserunt eligendi ex fugit illo in quod
        reiciendis reprehenderit totam! Amet aspernatur dignissimos incidunt
        mollitia non quisquam quos.
      </p>
    </div>
  );
};

export default IntroText;
