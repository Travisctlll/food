import { useEffect, useState } from "react";
import { FoodCard } from "./foodcard";
import { NewDish } from "./newdish";

const option = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const CategoryFoods = ({ data }) => {
  const [foodsData, setFoodsData] = useState([]);

  const foodApiLink = `http://localhost:8000/food`;

  const getData = async () => {
    const data = await fetch(foodApiLink, option);
    const jsonData = await data.json();
    setFoodsData(jsonData);
  };

  const filteredFood = foodsData.filter((food) => {
    return food.category?._id === data?._id;
  });
  console.log("it is food data", foodsData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl h-auto flex  flex-col gap-8">
      <p className="font-black text-2xl">{data.name}</p>
      <div className="flex gap-4 flex-wrap">
        <NewDish data={data} />

        {filteredFood.map((food) => {
          return (
            <FoodCard
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
