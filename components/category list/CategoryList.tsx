import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  img: string;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{
          data: Category[];
          links: any;
          meta: any;
        }>("https://belajar-react.smkmadinatulquran.sch.id/api/category/all");

        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-scroll">
      <section className="flex gap-5 p-4">
        <Link href="/">
          {" "}
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
        </Link>
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <div
              className="flex items-center text-white  font-semibold text-2xl justify-center cursor-pointer"
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
          </Link>
        ))}
      </section>
    </div>
  );
};

export default CategoryList;
