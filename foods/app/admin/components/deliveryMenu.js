"use client";

import { MenuMain } from "./menuMain";
import { Sidebar } from "./sidebar";

export const DeliveryMenu = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      <Sidebar />
      <MenuMain />
    </div>
  );
};
