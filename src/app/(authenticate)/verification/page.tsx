"use client";
import clothes from "../../../../public/clothes.png";
import Button from "@/components/Others/Button";
import Input from "@/components/Others/Input";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgotPassword: NextPage = () => {
  const gradient =
    "bg-gradient-to-r from-[#FF8B42] via-39-[#FA665D] via-[#F95D63] to-[#F7417A] text-white";

  const router = useRouter();

  return (
    <div className="bg-white p-6 flex h-screen">
      <div className="w-full lg:w-1/2 xl:w-2/5 px-14 py-20">
        <h2 className="mb-3">Verification Code</h2>
        <p className="text-gray2 mb-12">
          We Have Sent The Verification Code To Your Phone <br />
          010-9626-9579
        </p>
        <Input type="text" name="phonenumber" label="Enter Your Phone Number" />
        <Button
          width="w-full"
          height="h-12"
          onClick={() => {
            router.push("/resetpassword");
          }}
        >
          Confirm
        </Button>
      </div>
      <div className={`w-0 lg:w-1/2 xl:w-3/5 h-full relative`}>
        <Image src={clothes} alt="clothes" objectFit="cover" layout="fill" />
        <div className={`absolute h-full w-full ${gradient} opacity-60`} />
      </div>
    </div>
  );
};

export default ForgotPassword;
