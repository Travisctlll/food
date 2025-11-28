"use client";
import { FoodLogo } from "../icon/foodlogo.js";
import { Location } from "../icon/loacation.js";
import { Arrow } from "../icon/rightarrow.js";
import { Shop } from "../icon/shop.js";
import { Profile } from "../icon/profile.js";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export const Header = () => {
  const [tab, setTab] = useState("order");
  return (
    <div>
      <div className="w-full h-[68px] bg-black flex items-center justify-around">
        <div className="flex">
          <FoodLogo />
          <div>
            <p className="text-white text-lg">
              Nom<span className="text-red-500">Nom</span>
            </p>
            <p className="text-[#71717A] text-sm">Swift delivery</p>
          </div>
        </div>
        <div className="flex gap-[13px]">
          <div className="w-[251px] h-9 bg-gray-200 rounded-2xl flex items-center text-sm justify-around cursor-pointer">
            <Location />
            <p className="text-red-500">Delivery address:</p>
            <p className="text-gray-400"> Add Location</p>
            <Arrow />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline "
                className="w-9 h-9 bg-white border rounded-3xl cursor-pointer"
              >
                <Shop />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#404040] w-[500px] max-w-none!">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-5">
                  <Shop />
                  <p>Order detail</p>
                </SheetTitle>
              </SheetHeader>
              <div className={"grid flex-1 auto-rows-min gap-6 px-4"}>
                <div className="w-auto h-auto bg-white rounded-3xl flex px-1 py-1 ">
                  <button
                    onClick={() => setTab("cart")}
                    className={`w-[233px] h-[36px] rounded-2xl border px-8 y-2 flex items-center justify-center cursor-pointer ${
                      tab === "cart" ? "bg-red-500 " : "bg-transparent"
                    }`}
                  >
                    Cart
                  </button>
                  <button
                    onClick={() => setTab("order")}
                    className={`w-[233px] h-[36px] rounded-2xl border px-8 y-2 flex items-center justify-center cursor-pointer ${
                      tab === "order" ? "bg-red-500 " : "bg-transparent"
                    }`}
                  >
                    Order
                  </button>
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <button className="w-9 h-9 rounded-3xl bg-red-500 flex items-center justify-center cursor-pointer">
            <Profile />
          </button>
        </div>
      </div>
      <div>
        <img src="BG.png" />
      </div>
    </div>
  );
};
