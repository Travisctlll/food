import { FoodLogo } from "../icon/foodlogo";

export const Footer = () => {
  return (
    <div className="w-full h-[755px] bg-black flex flex-col justify-around">
      <div className="w-full h-[92px]  text-white text-3xl flex items-center overflow-hidden">
        <div className="w-fit bg-red-500 animation-scroll  py-10   ">
          {Array(30)
            .fill("Fast fresh delivery")
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>
      <div className="flex justify-around">
        <div className=" flex flex-col">
          <FoodLogo />
          <p className="text-white text-lg">
            Nom<span className="text-red-500">Nom</span>
          </p>
          <p className="text-[#71717A] text-sm">Swift delivery</p>
        </div>
        <div className=" flex flex-col">
          <p className="text-2xl text-gray-500">NOMNOM</p>
          <p className="text-white">Home</p>
          <p className="text-white">Contact us</p>
          <p className="text-white">Delivery zone</p>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl text-gray-500">MENU</p>
          <p className="text-white">Appetizers</p>
          <p className="text-white">Salads</p>
          <p className="text-white">Pizzas</p>
          <p className="text-white">Main dishes</p>
          <p className="text-white">Desserts</p>
        </div>
        <div>
          <p className="text-2xl">MENU</p>
          <p className="text-white">Side dish</p>
          <p className="text-white">Brunch</p>
          <p className="text-white">Desserts</p>
          <p className="text-white"> Bevergaes </p>
        </div>
        <div>
          <p className="text-2xl text-gray-500">FOLLOW US</p>
          <div></div>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-800"></div>
      <div className="flex gap-12">
        <p className="text-gray-500">Copy right 2024 © Nomnom LLC</p>
        <p className="text-gray-500">Privacy policy </p>
        <p className="text-gray-500">Terms and conditoin</p>
        <p className="text-gray-500">Cookie policy</p>
      </div>
    </div>
  );
};
