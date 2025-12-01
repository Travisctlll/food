"use client";
import { useEffect, useState } from "react";
import { UserFoodCard } from "./userfoodcard";

const option = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const UserFoods = ({ title, items }) => {
  const [foodsData, setFoodsData] = useState([]);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const foodApiLink = `${url}/food`;

  const getData = async () => {
    const data = await fetch(foodApiLink, option);
    const jsonData = await data.json();
    setFoodsData(jsonData);
  };

  console.log(items, "kudfghieugiegru");

  useEffect(() => {
    getData();
  }, []);
  const filteredFood = foodsData.filter((data) => {
    return data?.category?._id === items?._id;
  });
  return (
    <div className="w-full h-auto rounded-xl flex-col flex gap-10 ">
      <p className="text-white font-bold   text-2xl">{title}</p>
      <div className="flex flex-wrap gap-10">
        {filteredFood?.map((food) => {
          return (
            <UserFoodCard
              key={food._id}
              foodname={food.foodname}
              foodprice={food.price}
              foodingred={food.ingredients}
              image={food.image}
            />
          );
        })}
      </div>
    </div>
  );
};
