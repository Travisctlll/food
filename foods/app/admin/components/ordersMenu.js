"use client";

import { ChevronDownIcon } from "lucide-react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Sidebar } from "./sidebar";

export const OrdersMenu = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1 px-10 py-12 overflow-auto">
        <div className="w-full bg-white rounded-xl shadow-sm flex justify-between items-center px-8 py-4 mb-6">
          <p className="text-2xl font-black">Orders</p>

          <div className="flex items-end gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="date" className="text-sm font-medium">
                Filter by date
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal"
                  >
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button variant="outline" className="h-10 mt-6">
              Change delivery state
            </Button>
          </div>
        </div>

        <div className="w-full bg-white border border-gray-200 rounded-xl h-[70vh] flex items-center justify-center text-gray-400">
          <p>No orders yet</p>
        </div>
      </div>
    </div>
  );
};
