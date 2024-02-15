import Image from "next/image";
import React from "react";
import prosite from "./assets/prosite.png";

const Prosite = () => {
  return (
    <>
      <div className="bg-black relative text-white flex justify-center items-center h-full p-2 sm:h-screen w-full">
        <div className="flex justify-center items-center">
          <div className="flex flex-col sm:gap-3 gap-5 justify-center items-center">
            <div className="flex sm:flex-row flex-col justify-center items-center">
              <div className="flex justify-start sm:relative sm:-left-[80px] items-start">
                <Image
                  src={prosite}
                  className="sm:max-w-[350px]"
                  alt="prosite-image"
                />
              </div>
              <div className="sm:text-6xl pp:text-4xl text-3xl sm:relative sm:-left-[140px] sm:top-6 flex flex-col gap-2 font-semibold">
                <div>Hey there 👋</div>
              </div>
            </div>
            <div className="sm:max-w-[50%] max-w-[85%] sm:relative sm:-top-7 text-center">
              "Let's with Customize your Profile with in a few clicks"
            </div>
            <div className="flex gap-5 justify-center items-center">
              <button className="bg-[#FDB827] text-sm pp:text-base font-bold text-black p-2 px-3.5 pp:px-5 rounded-md">
                About me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prosite;
