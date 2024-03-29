import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { CookiesProvider } from "next-client-cookies/server";

const latin = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={latin.className}>
        <ApolloWrapper>
          <CookiesProvider>{children}</CookiesProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
