import Image from "next/image";

import { WhitePlus } from "../icon/whiteplus";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const UserFoodCard = (props) => {
  const { foodname, foodprice, foodingred, image } = props;
  console.log(foodname, "dufgileurgieurggiuergugieriug");

  return (
    <div className="w-[397px] h-[342px] border flex rounded-2xl justify-center items-center flex-col gap-4 bg-white">
      <div className="w-[365px] h-[210px] border rounded-2xl flex items-end justify-end relative">
        <Image
          src={image || "/BG.png"}
          width={100}
          height={100}
          alt="zurag"
          className="w-full h-full absolute border rounded-2xl"
        />
        <Button
          variant="outline"
          size="icon"
          className="rounded-full absolute z-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="rounded-2xl">
                <WhitePlus />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-auto h-auto none p-6 ">
              <DialogHeader></DialogHeader>
              <div className="flex gap-20">
                <div className="w-[367px] h-[364px] border rounded-2xl">
                  <Image
                    src={image || "/BG.png"}
                    width={100}
                    height={100}
                    alt="zurag"
                    className="w-full h-full  border rounded-2xl"
                  />
                </div>
                <div className="flex justify-around flex-col">
                  <div className="">
                    <p className="text-red-500 font-semibold text-2xl">
                      {foodname}
                    </p>
                    <p className="text-[14px] text-center">{foodingred}</p>
                  </div>
                  <div className="flex gap-30">
                    <div className="flex flex-col">
                      <p>Totalprice</p>
                      <p>{foodprice}</p>
                    </div>
                    <div className="flex">
                      <button className="bg-white border rounded-3xl w-10 h-10 cursor-pointer">
                        <p>-</p>
                      </button>
                      <p className="font-black">1</p>
                      <button className="bg-white border rounded-3xl w-10 h-10 cursor-pointer">
                        <p>+</p>
                      </button>
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <button
                        type="button"
                        variant="secondary"
                        className="w-[377px] h-11 bg-black border rounded-2xl cursor-pointer text-white"
                      >
                        Add to card
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </Button>
      </div>
      <div>
        <div className="flex gap-5 items-center justify-center">
          <p className="text-red-500 font-semibold text-2xl">{foodname}</p>
          <p className=" font-black text-[18px]">{foodprice}</p>
        </div>

        <div className="flex justify-center items-center px-2">
          <p className="text-[14px] text-center">{foodingred}</p>
        </div>
      </div>
    </div>
  );
};
