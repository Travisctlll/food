import { useState } from "react";
import { DeliverLogo } from "../../icon/deliverlogo";
import { FoodLogo } from "../../icon/foodlogo";
import { SquareLogo } from "../../icon/squarelogo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[20%] h-full bg-white flex flex-col items-center py-6">
      <div className="flex items-center gap-4">
        <FoodLogo />
        <div>
          <p className="font-black text-lg">NomNom</p>
          <p className="text-[#71717A] text-sm">Swift delivery</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-5">
        <Link href="/admin/food">
          <button
            className={`rounded-2xl flex justify-center items-center gap-3 w-fit px-8 py-2 cursor-pointer transition ${
              pathname.includes("admin/food")
                ? "bg-black text-white"
                : "bg-transparent text-black"
            }`}
          >
            <SquareLogo />
            <p>Food menu</p>
          </button>
        </Link>
        <Link href="/admin" className="w-fit">
          <button
            className={`rounded-2xl flex justify-center items-center gap-3 w-fit px-8 py-2 cursor-pointer transition ${
              pathname === "/admin"
                ? "bg-black text-white"
                : "bg-transparent text-black"
            }`}
          >
            <DeliverLogo />
            <p>Orders</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
