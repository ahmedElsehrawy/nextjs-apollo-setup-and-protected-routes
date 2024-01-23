"use client";
import React from "react";
import { useCookies } from "next-client-cookies";
import { CookiesProvider } from "next-client-cookies/server";

// import { getClient } from "@/lib/client";
import { gql, useQuery } from "@apollo/client";

const CATEGORIES = gql`
  query Categories($skip: Int!, $take: Int!, $name: String) {
    categories(skip: $skip, take: $take, name: $name) {
      count
      nodes {
        name
        id
      }
    }
  }
`;

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

// export const dynamic = "force-dynamic";
// export const revalidate = 60;

const Home = () => {
  // const client = getClient();

  // const { data } = await client.query({
  //   query: PRODUCTS,
  //   variables: {
  //     skip: 0,
  //     take: 50,
  //     where: {
  //       categoryId: null,
  //       count: null,
  //     },
  //   },
  // });
  // console.log("🚀 ~ Home ~ data:", data?.products);
  const cookies = useCookies();

  const token: string | undefined = cookies.get("token");
  console.log("🚀 ~ Home ~ token:", token);

  const { data, loading } = useQuery(ME, {
    context: {
      headers: {
        Authorization: `Bearer ${JSON.parse(token!)}`,
      },
    },
  });
  console.log("🚀 ~ Home ~ data:", data);

  if (loading) {
    return <div>loading.....</div>;
  }

  return (
    <div>
      {/* {data?.categories?.nodes?.map((cat: any) => (
        <div key={cat.id}>{cat.name}</div>
      ))} */}
      <h1>{data?.user?.firstName}</h1>
    </div>
  );
};

export default Home;
