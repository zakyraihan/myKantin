"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQuery } from "@/components/ReactQuery";
import SideBar from "@/components/sidebar/SideBar";
import Category from "@/components/category/Category";
import CategoryList from "@/components/category list/CategoryList";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ReactQuery>
          {" "}
          <Header />
          <Category title="Category" name="Lebih Lengkap" />
          {children}
        </ReactQuery>
      </body>
    </html>
  );
}
