"use client";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { EditPen } from "../../icon/editpen";

export const FoodCard = (props) => {
  const { foodname, foodprice, foodingred, image } = props;
  return (
    <div className="w-[275px] h-[241px] border flex rounded-2xl justify-center items-center flex-col gap-4">
      <div className="w-[223px] h-[129px] border rounded-2xl flex items-end justify-end relative">
        <Image
          src={image || "/BG.png"}
          width={100}
          height={100}
          alt="zurag algaa"
          className="w-full h-full absolute border rounded-2xl"
        />
        <Button
          variant="outline"
          size="icon"
          className="rounded-full absolute z-10"
        >
          <EditPen />
        </Button>
      </div>
      <div>
        <div className="flex gap-5 items-center justify-center">
          <p className="text-red-500 font-semibold">{foodname}</p>
          <p className="text-[14px] font-black">{foodprice}</p>
        </div>

        <div className="flex justify-center items-center px-2">
          <p className="text-[10px] text-center">{foodingred}</p>
        </div>
      </div>
    </div>
  );
};
