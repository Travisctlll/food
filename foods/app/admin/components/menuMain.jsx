"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Category } from "./category";
import { CategoryFoods } from "./category-foods";

const option = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const MenuMain = () => {
  const [categoryData, setCategoryData] = useState([]);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const categoryApiLink = `${url}/category`;

  const getData = async () => {
    const categoryData = await fetch(categoryApiLink, option);
    const categoryJsonData = await categoryData.json();
    setCategoryData(categoryJsonData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col flex-1 px-10 py-12 overflow-auto gap-5">
      <Category />
      {categoryData.map((category) => {
        return (
          <div key={category._id}>
            <CategoryFoods data={category} />
          </div>
        );
      })}
    </div>
  );
};
