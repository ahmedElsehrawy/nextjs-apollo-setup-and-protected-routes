"use client";
import clothes from "@/../public/clothes.png";
import Button from "@/components/Others/Button";
import Input from "@/components/Others/Input";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login: NextPage = () => {
  const gradient =
    "bg-gradient-to-r from-[#FF8B42] via-39-[#FA665D] via-[#F95D63] to-[#F7417A] text-white";

  const router = useRouter();

  return (
    <div className="bg-white p-6 flex h-screen w-full">
      <div className="w-full lg:w-1/2 xl:w-2/5 px-14 py-20">
        <h2 className="mb-3">Welcome to ElWekala !</h2>
        <p className="text-gray2 mb-12">
          Please Sign-In To Your Account And Start The Adventure
        </p>
        <Input type="text" name="phonenumber" label="Phone Number" />
        <Input type="password" name="password" label="Password" />
        <div className="flex justify-between w-full mb-12">
          <div className="flex gap-2">
            <input type="checkbox" className="h-10 w-10" />
            <span className="text-md font-semibold">Remember me</span>
          </div>
          <Link href="/forgotpassword" className="text-orange underline">
            Forgot Password!
          </Link>
        </div>
        <Button
          width="w-full"
          height="h-12"
          onClick={() => {
            router.push("/home");
          }}
        >
          Login
        </Button>
      </div>
      <div className={`w-0 lg:w-1/2 xl:w-3/5 h-full relative`}>
        <Image
          src={clothes}
          alt="clothes"
          className="absolute object-fill w-full h-full"
        />
        <div className={`absolute h-full w-full ${gradient} opacity-60`} />
      </div>
    </div>
  );
};

export default Login;
