import React from "react";
import Image from "next/image";

function Details() {
  return (
    <div className="my-10">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="font-space-grotesk text-[#141c3a] text-[32px] md:text-[42px] text-center font-semibold">Frontend Developer & Backend Developer</h2>
        <p className=" text-[#141c3a] text-[18px] font-medium">I design and code beautifully simple things, and I love what I do</p>{" "}
        <Image src="/assets/image1.png" alt="profile" width={280} height={300} />
      
      </div>
    </div>
  );
}

export default Details;
