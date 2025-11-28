"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "../../icon/plusicon";
import { useEffect, useState } from "react";
import Image from "next/image";

const option = { method: "GET" };
const UPLOAD_PRESET = "food delievery";
const CLOUD_NAME = "dvgjx1xek";

export const NewDish = ({ data }) => {
  const [logoUrl, setLogoUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editIngredients, setEditIngerdients] = useState("");
  const [foodData, setFoodData] = useState([]);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,

        {
          method: "POST",

          body: formData,
        }
      );

      const data = await response.json();
      console.log(data.secure_url, "img");
      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
    }
  };

  const getData = async () => {
    const data = await fetch(`http://localhost:8000/food/`, option);
    const jsonData = await data.json();
    setFoodData(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  const filteredData = foodData.filter((food) => {
    return food.category?._id === data?._id;
  });
  console.log(data, "lishfgiuhgliurehgilherlhgui");

  console.log("suhhg", foodData);

  const handleSubmit = async () => {
    try {
      await fetch(`http://localhost:8000/food`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          foodname: editName,
          price: Number(editPrice),
          ingredients: editIngredients,
          category: data._id,
          image: logoUrl,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogoUpload = async (event) => {
    console.log("haha ");

    const file = event.target.files[0];

    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadToCloudinary(file);

      setLogoUrl(url);
    } catch (err) {
      console.log("Failed to upload logo: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-[275px] h-[241px] border border-dashed border-red-500 rounded-2xl justify-center items-center flex flex-col-reverse ">
      <p>Add new Dish to Appetizers{} </p>
      <Dialog className="">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-red-500 "
          >
            <PlusIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[460px] h-[592px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add new Dish to Appetizers </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-4">
                <Label>food name</Label>
                <Input
                  className="w-auto h-[38px ]"
                  placeholder="Type food name"
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label>food price</Label>
                <Input
                  className="w-auto h-[38px]"
                  placeholder="Type food name"
                  onChange={(e) => setEditPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Label>Ingredients</Label>
            <Input
              className="h-[90px]"
              placeholder="List ingeredients..."
              onChange={(e) => setEditIngerdients(e.target.value)}
            />
          </div>
          <div>
            <Label>Food image</Label>
            <div>
              <Input
                className="border bordexr-dashed w-[412px] h-[138px]"
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                disabled={uploading}
              />
              {uploading && <p className="text-blue-600">Uploading...</p>}
              {logoUrl && (
                <div className="mt-4">
                  <p className="text-green-600 font-semibold mb-2">
                    Logo uploaded!
                  </p>

                  <div className="relative w-64 h-64">
                    <Image
                      src={logoUrl}
                      alt="Uploaded logo"
                      fill
                      sizes="256px"
                      className="object-contain rounded border border-gray-300 "
                    />
                  </div>

                  <p className="mt-2 text-sm text-gray-600 break-all">
                    {logoUrl}
                  </p>
                </div>
              )}
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
                Add Dish
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
