import { RightArrow } from "../icon/leftarrow";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="flex flex-col gap-6 ">
        <button className="w-9 h-9 border rounded-[7px] gap- flex justify-center items-center cursor-pointer">
          <RightArrow />
        </button>
        <div>
          <p className="text-2xl">Create your account</p>
          <p className="text-[12px] text-gray-500">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <input
            className="w-[416px] h-9 border"
            placeholder="Enter your email address"
          ></input>
          <button className="w-[416px] h-9 border">Let's Go</button>
          <div className="flex gap-4 justify-center">
            <p>Already have an account?</p>
            <a className="text-blue-500">Log in </a>
          </div>
        </div>
      </div>
      <div>
        <img src="/bike.png " />
      </div>
    </div>
  );
}
