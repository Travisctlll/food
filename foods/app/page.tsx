"use client";
import { Footer } from "./_components/footer";
import { Header } from "./_components/Header";
import { UserFoods } from "./_components/userfoods";
import { useEffect, useState } from "react";

const option = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export default function Home() {
  const [categoryData, setCategoryData] = useState([]);

  const categoryApiLink = `http://localhost:8000/category`;

  const getData = async () => {
    const categoryData = await fetch(categoryApiLink, option);
    const jsonDataCategory = await categoryData.json();
    setCategoryData(jsonDataCategory);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-auto bg-[#404040]">
      <Header />
      {categoryData.map((data, index) => {
        return (
          <div key={index}>
            <UserFoods title={data.name} items={data} />
          </div>
        );
      })}

      <Footer />
    </div>
  );
}
