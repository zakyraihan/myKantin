import React from "react";

interface Props {
  title: string;
  name?: string;
}

const Category: React.FC<Props> = ({ title, name }) => {
  return (
    <header>
      <div className="flex justify-between  p-4">
        <h1 className="dark:text-slate-300 text-black text-xl font-semibold">
          {title}
        </h1>
        <div className="bg-[#FB6D3A] dark:text-slate-300 text-black rounded-full py-1 px-3">
          {name}
        </div>
      </div>
    </header>
  );
};

export default Category;
