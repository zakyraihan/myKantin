"use client";
import CategoryList from "@/components/category list/CategoryList";
import { Drawer } from "@/components/Drawer";
import SideBar from "@/components/sidebar/SideBar";
import Category from "@/components/category/Category";
import Header from "@/components/header/Header";
import MenuList from "@/components/menu list/MenuList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-col ">
        <Category title="Populer" name="Lebih Lengkap" />
        <MenuList />
      </div>
    </div>
  );
}
