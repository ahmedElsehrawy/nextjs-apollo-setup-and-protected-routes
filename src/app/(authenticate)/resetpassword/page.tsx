"use client";
import clothes from "../../../../public/clothes.png";
import Button from "@/components/Others/Button";
import Input from "@/components/Others/Input";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResetPassword: NextPage = () => {
  const gradient =
    "bg-gradient-to-r from-[#FF8B42] via-39-[#FA665D] via-[#F95D63] to-[#F7417A] text-white";

  const router = useRouter();

  return (
    <div className="bg-white p-6 flex h-screen">
      <div className="w-full lg:w-1/2 xl:w-2/5 px-14 py-20">
        <h2 className="mb-3">New Password</h2>
        <p className="text-gray2 mb-12">
          Enter Your New Password And Confirm It
        </p>
        <Input type="password" name="password" label="Enter Your Password" />
        <Input
          type="password"
          name="confirmpassword"
          label="Enter Your Confirm Password"
        />
        <Button
          width="w-full"
          height="h-12"
          onClick={() => {
            router.push("/verification");
          }}
        >
          Reset Password
        </Button>
      </div>
      <div className={`w-0 lg:w-1/2 xl:w-3/5 h-full relative`}>
        <Image src={clothes} alt="clothes" objectFit="cover" layout="fill" />
        <div className={`absolute h-full w-full ${gradient} opacity-60`} />
      </div>
    </div>
  );
};

export default ResetPassword;
