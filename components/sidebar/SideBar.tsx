"use client";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="mr-auto md:flex hidden">
      <aside className="fixed top-0 right-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-950">
          <div className="flex dark:text-white justify-center gap-8 text-lg items-center">
            <FaHeart />
            <FaBox />
            <div className="text-2xl">
              <IoNotifications />
            </div>
            <Image
              src={"/assets/Ellipse 1.png"}
              alt=""
              width={35}
              height={35}
            />
          </div>
          <div className="px-3 mt-10">
            <h1 className="dark:text-gray-400 font-semibold text-xl">
              Pesanan Saya
            </h1>
            <div className="mt-7 bg-[#6455C2] px-5 py-6   rounded-[25px]">
              <div className=" flex flex-col">
                <p className="text-white">Mr. Rizqi</p>

                <p className="mt-4 text-white">Rp. 1.000.000,</p>

                <p className="mt-4 text-white">
                  3 7 5 8 * * * * * * * * 8 9 1 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
