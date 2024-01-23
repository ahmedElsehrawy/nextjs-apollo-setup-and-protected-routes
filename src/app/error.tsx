"use client";

import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorPageProps) => {
  const cookie = useCookies();
  const router = useRouter();

  const login = () => {
    cookie.remove("token");
    router.push("/login");
  };
  return (
    <div>
      <h1>Error Ooooops....</h1>
      <h1>something went wrong</h1>
      <h1>{error.message}</h1>
      {error.message === "Invalid/Expire token" && (
        <button
          className="py-4 px-8 bg-purple mr-10 text-white text-md"
          onClick={login}
        >
          Login agian
        </button>
      )}
      <button
        className="py-4 px-8 bg-purple text-white text-md"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
