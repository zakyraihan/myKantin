import React from "react";
import InputText from "../InputText";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <section className="flex items-center md:flex-row justify-between p-4 gap-7">
        <div className="flex gap-5">
          <Image src={"/assets/logo.png"} alt="logo" width={150} height={100} />
          <div className="md:flex hidden">
            <InputText name="search" placeholder="Search" value={""} id="" />
          </div>
        </div>
        <div className="text-2xl">
          <IoSearch />
        </div>
      </section>
      <div className="p-4 flex flex-col">
        <div className="dark:bg-gray-950 bg-[#FFF7ED] p-5 md:w-[50rem] w-[23rem] rounded-[50px]">
          <div className="flex flex-row justify-center items-center gap-[3rem]">
            <Image
              src={"/assets/undraw_breakfast_psiw 1.png"}
              alt="logo"
              width={150}
              height={100}
            />
            <div className="">
              <h1 className="text-xl text-[#FB6D3A] font-semibold">
                Promo Hari Ini
              </h1>
              <h1 className="text-[#FB6D3A] font-medium">
                Perut kenyang, hati senang
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
