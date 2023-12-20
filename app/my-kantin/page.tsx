"use client";

import React, { useState, useEffect, useRef } from "react";
import useKategoriModule from "./lib";
import { FaBox, FaRegStar } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import Image from "next/image";
import { IoNotifications } from "react-icons/io5";
import { MdRemoveShoppingCart } from "react-icons/md";

const Pgess = () => {
  const { useKategoriList, useDishList } = useKategoriModule();
  const { data: kategoriData } = useKategoriList();
  const { data: dishData } = useDishList();
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState<any | null>(null);
  const [sidebarItems, setSidebarItems] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleMenuItemClick = (menuItem:any) => {
    setSelectedMenuItem(menuItem);
  };

  const closePopup = () => {
    setSelectedMenuItem(null);
  };

  const decreaseQuantity = () => {
    if (selectedMenuItem && selectedMenuItem.jumlah > 0) {
      setSelectedMenuItem((prevItem: any) => ({
        ...prevItem,
        jumlah: prevItem.jumlah - 1,
      }));
    }
  };

  const increaseQuantity = () => {
    if (selectedMenuItem && selectedMenuItem.jumlah > 0) {
      setSelectedMenuItem((prevItem: any) => ({
        ...prevItem,
        jumlah: prevItem.jumlah + 1,
      }));
    }
  };

  const decreasePesan = () => {
    if (selectedMenuItem && selectedMenuItem.pesan > 0) {
      setSelectedMenuItem((prevItem: any) => ({
        ...prevItem,
        pesan: prevItem.pesan - 1,
      }));
    }
  };

  const increasePesan = () => {
    if (selectedMenuItem && selectedMenuItem.pesan < selectedMenuItem.jumlah) {
      setSelectedMenuItem((prevItem: any) => ({
        ...prevItem,
        pesan: prevItem.pesan + 1,
      }));
    }
  };

  const updateTotal = () => {
    const newTotal = sidebarItems.reduce(
      (acc, item) => acc + item.harga * item.pesan,
      0
    );
    setTotal(newTotal);
  };

  const addToSidebar = () => {
    if (selectedMenuItem && selectedMenuItem.pesan > 0) {
      const updatedItem = {
        ...selectedMenuItem,
        jumlah: selectedMenuItem.jumlah - selectedMenuItem.pesan,
      };
      setSelectedMenuItem(updatedItem);

      setSidebarItems((prevItems) => [...prevItems, updatedItem]);
      setSelectedMenuItem(null);
      updateTotal();
    }
  };

  const [selected, setSelected] = useState<String | null>(null);
  const MymenuItems = dishData.filter((dishItem) => {
    if (selected === "masakan") {
      return (
        !dishItem.name.toLowerCase().startsWith("juz") &&
        !dishItem.name.toLowerCase().startsWith("pizza")
      );
    } else if (selected) {
      return dishItem.name.toLowerCase().includes(selected.toLowerCase());
    } else {
      return true;
    }
  });
  return (
    <>
      <div className="flex gap-5 p-4">
        <button onClick={() => setSelected(null)}>
          <div
            className="flex items-center font-semibold text-2xl justify-center cursor-pointer"
            style={{
              backgroundImage: `url(https://www.astronauts.id/blog/wp-content/uploads/2022/08/Makanan-Khas-Daerah-tiap-Provinsi-di-Indonesia-Serta-Daerah-Asalnya.jpg)`,
              backgroundSize: "cover",
              height: "110px",
              width: "200px",
              borderRadius: "20px",
            }}
          >
            Semua
          </div>
        </button>
        {kategoriData.map((category, index) => (
          <button
            key={index}
            className="relative"
            onClick={() => setSelected(category.name)}
          >
            <div
              className="flex items-center font-semibold text-2xl justify-center cursor-pointer"
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: "cover",
                height: "110px",
                width: "200px",
                borderRadius: "20px",
              }}
            >
              {category.name}
            </div>
          </button>
        ))}
      </div>
      <div className="md:w-[60rem] flex flex-wrap gap-5 md:gap-10 md:p-5 md:justify-start items-center justify-center">
        {MymenuItems.map((menuItem) => (
          <div key={menuItem.name} className="flex-shrink-0 cursor-pointer">
            <div className="flex flex-col">
              <div
                onClick={() => handleMenuItemClick(menuItem)}
                className="flex font-normal text-sm cursor-pointer"
                style={{
                  backgroundImage: `url(${menuItem.image})`,
                  backgroundSize: "cover",
                  height: "110px",
                  width: "200px",
                  borderRadius: "20px",
                }}
              >
                <p className="relative top-[5.3rem] left-3 text-white">
                  {menuItem.waktu}
                </p>
              </div>
              <h1>{menuItem.name}</h1>
              <div className="mt-2 flex justify-between">
                <div className="flex items-center gap-1 text-sm">
                  <FaRegStar />
                  {menuItem.rating}
                </div>
                <div className="">
                  Rp
                  {menuItem.harga}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="fixed md:flex hidden top-0 right-0 h-full w-1/4 dark:bg-gray-950  bg-white overflow-y-auto">
          <div className="flex flex-col ">
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
              <div className="mt-7 bg-[#6455C2] px-5 py-6 rounded-[25px]">
                <div className=" flex flex-col">
                  <p className="text-white">Mr. Rizqi</p>

                  <p className="mt-4 text-white">Rp. 1.000.000,</p>

                  <p className="mt-4 text-white">
                    3 7 5 8 * * * * * * * * 8 9 1 3
                  </p>
                </div>
              </div>
            </div>
            <br />
            {sidebarItems.length > 0 ? (
              sidebarItems.map((item) => (
                <>
                  <div key={item.name} className="p-4 ">
                    <div className="flex gap-3 ">
                      <img
                        src={item.image}
                        alt=""
                        width={50}
                        className="rounded-md"
                      />
                      <div className="border-l border-gray-200"></div>
                      {item.pesan}x
                      <div>
                        <p className="text-sm font-semibold dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-sm text-[#B3B3B3]">Rp{item.harga}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <div className="p-4 border-gray-200 flex flex-col gap-2  my-auto justify-center">
                <div className="flex justify-center text-5xl">
                  <MdRemoveShoppingCart />
                </div>
                <p className="text-sm font-semibold text-white text-center">
                  Tidak ada Pesanan
                </p>
              </div>
            )}

            <div className="flex flex-col justify-center my-5 px-4">
              <div className=" flex gap-5 items-center">
                <p className="text-[#414141] text-sm">Total:</p>
                <h1 className="text-2xl text-[#B3B3B3]">Rp {total}</h1>
              </div>
              <button className="px-5 py-3 bg-[#FCD561] rounded-xl mt-3 text-[#414141]">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>

        {selectedMenuItem && (
          <div className="fixed top-0 md:right-[10rem] h-full w-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="dark:bg-[#202020] bg-white md:w-[45rem] md:py-4rem  rounded-md p-4">
              <div className="flex justify-between">
                <Image
                  src={"/assets/logo.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="cursor-pointer"
                  onClick={() => closePopup()}
                />
                <button
                  className="dark:text-white text-2xl"
                  onClick={() => closePopup()}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="flex gap-3 md:flex-row flex-col">
                <div className="mt-4 ">
                  <img
                    src={selectedMenuItem.image}
                    width={350}
                    height={40}
                    alt={selectedMenuItem.image}
                    className="rounded-lg bg-cover"
                  />
                  <div className="mt-2 flex justify-between">
                    <h1 className="dark:text-[#B0B0B0] font-semibold text-lg">
                      {selectedMenuItem.name}
                    </h1>
                    <h1 className="dark:text-[#B0B0B0]text-[#B0B0B0] font-normal ">
                      Rp{selectedMenuItem.harga}
                    </h1>
                  </div>
                </div>
                <div className="">
                  <div className="mt-2 flex gap-2">
                    <div className="border dark:text-[#B0B0B0]text-[#B0B0B0] py-1 px-1 text-sm rounded-full border-[#D9D9D966] font-semibold">
                      {selectedMenuItem.waktu}
                    </div>
                    <div className="border text-[#B0B0B0]py-1 px-2 text-sm rounded-full border-[#D9D9D966] font-semibold flex gap-1 items-center ">
                      <FaRegStar />
                      {selectedMenuItem.rating}
                    </div>
                    <button className="text-red-500">
                      <FaHeart />
                    </button>
                  </div>
                  <p className="text-[#B0B0B0] w-[22rem] text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Posuere sollicitudin ullamcorper vestibulum sollicitudin
                    ultricies sed odio. Dictum habitasse ornare posuere nulla
                    dignissim. Dictum at vivamus pellentesque velit tortor. Eu
                    nibh eros adipiscing.
                  </p>
                  <div className="mt-5">
                    <div className="flex justify-between">
                      <div className="flex bg-[#F9F2E8] items-center h-8 justify-center w-[6rem] text-xl text-[#414141] gap-3 rounded-2xl px-2">
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            increaseQuantity(), decreasePesan();
                          }}
                        >
                          <CiCircleMinus />
                        </div>
                        {selectedMenuItem.pesan}
                        <button
                          disabled={selectedMenuItem.jumlah === 0}
                          className="cursor-pointer"
                          onClick={() => {
                            decreaseQuantity(), increasePesan();
                          }}
                        >
                          <IoIosAddCircleOutline />
                        </button>
                      </div>
                      <button
                        className="bg-[#FCD561] cursor-pointer flex flex-row gap-2 items-center h-8 w-[10.5rem] justify-center rounded-full dark:text-[#414141] text-[#414141]"
                        onClick={() => addToSidebar()}
                      >
                        <FaCartShopping />
                        Tambah Pesanan
                      </button>
                    </div>
                    <p className="text-sm dark:text-[#B0B0B0] text-end md:mt-12 mt-3">
                      Tersisa {selectedMenuItem.jumlah}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Pgess;
