import ShopLayout from "@/components/Layout/ShopLayout";
import { redirect } from "next/navigation";
import React from "react";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { cookies } from "next/headers";

interface Props {
  children: React.ReactNode;
}

// const ME = gql`
//   query User {
//     user {
//       id
//       firstName
//       email
//       role
//     }
//   }
// `;

const MainShopLayout = async ({ children }: Props) => {
  // const myCookie = cookies();

  // let token: string | null = null;
  // if (myCookie.get("token")) {
  //   token = myCookie.get("token")!.value;
  // }

  // const client = getClient();

  // // just a query
  // const { data } = await client.query({
  //   query: ME,
  //   context: {
  //     headers: {
  //       Authorization: token ? `Bearer ${JSON.parse(token)}` : token,
  //     },
  //   },
  // });

  return <ShopLayout>{children}</ShopLayout>;
};

export default MainShopLayout;
