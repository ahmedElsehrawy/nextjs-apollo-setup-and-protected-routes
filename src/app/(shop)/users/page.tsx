import { gql } from "@apollo/client";
import { Metadata } from "next";
import React from "react";
import { getClient } from "@/lib/client";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Users | Elwekala",
  description: "Generated by create next app",
};

const ME = gql`
  query Query {
    user {
      id
      firstName
      email
      phone
    }
  }
`;

const Users = async () => {
  const client = getClient();
  const ourCookies = cookies();

  let tokenValue = await ourCookies.get("token")!.value;

  let token = JSON.parse(tokenValue);

  const { data } = await client.query({
    query: ME,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  console.log("🚀 ~ Users ~ data:", data);
  return (
    <>
      <h2 className="text-darkBlue2">{data?.user?.firstName}</h2>
      <h2>{data?.user?.email}</h2>
    </>
  );
};

export default Users;
