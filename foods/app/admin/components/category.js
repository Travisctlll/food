"use client";

import { PlusIcon } from "../../icon/plusicon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const option = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [handleClick, setHandleClick] = useState("");
  const categoryApiLink = `http://localhost:8000/category`;

  const category = (e) => {
    setHandleClick(e.target.value);
  };

  const getData = async () => {
    const data = await fetch(categoryApiLink, option);
    const jsonData = await data.json();
    setCategoryData(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/category", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          name: handleClick,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm flex flex-col gap-5 px-8 py-6 mb-6">
      <p className="font-black text-2xl">Dishes Category</p>

      <div className="flex flex-wrap gap-4">
        {categoryData.map((category) => {
          return (
            <Button
              key={category._id}
              variant="outline"
              className="rounded-2xl"
            >
              {category.name}
            </Button>
          );
        })}

        <Dialog className="w-[460px] h-[272px]">
          <DialogTrigger asChild>
            <Button variant="outline" className="rounded-full bg-red-500">
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add new category</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <div className=" flex gap-2 flex-col">
                <Label htmlFor="link" className="sr-only">
                  Category
                </Label>
                <Label>Category name</Label>
                <Input
                  className="w-[412px]"
                  placeholder="Enter your category"
                  onChange={category}
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-black text-white"
                  onClick={handleSubmit}
                >
                  Add-category
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
