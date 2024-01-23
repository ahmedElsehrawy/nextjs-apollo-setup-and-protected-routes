import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const loggedInAsAdminPath = [
  "/users",
  "/home",
  "/roles",
  "/vendor",
  "/orders",
  "/advertising",
  "/subscriptions",
  "/setting",
];
const loggedOutPath = ["/login", "/register"];

// here we just checking for the cookie and protect routes upon that
export default async function AuthMiddleware(
  req: NextRequest
): Promise<NextResponse> {
  if (
    !loggedInAsAdminPath.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    ) &&
    !loggedOutPath.some((path) => req.nextUrl.pathname.startsWith(path))
  ) {
    return NextResponse.next();
  } else {
    const myCookie = cookies();

    let token: string | null = null;
    if (myCookie.get("token")) {
      token = myCookie.get("token")!.value;
    }

    if (
      !token &&
      loggedInAsAdminPath.some((path) => req.nextUrl.pathname.startsWith(path))
    ) {
      return NextResponse.redirect("http://localhost:3000/login");
    } else if (
      token &&
      loggedOutPath.some((path) => req.nextUrl.pathname.startsWith(path))
    ) {
      return NextResponse.redirect("http://localhost:3000/home");
    }
  }

  return NextResponse.next();
}

// export function authenticatedMiddleWare(req: NextRequest) {
//   const mycookies = cookies();
//   if (!mycookies.get("token")?.value) {
//     return NextResponse.redirect("http://localhost:3000/login");
//   }
// }

// export function unAuthenticatedMiddleWare(req: NextRequest) {
//   const mycookies = cookies();
//   if (mycookies.get("token")?.value) {
//     return NextResponse.redirect("http://localhost:3000/home");
//   }
// }

// export default async function middleware(req: NextRequest) {
//   await authenticatedMiddleWare(req);
//   await unAuthenticatedMiddleWare(req);
// // }

// export const config = {
//   middleware: [
//     {
//       matcher: [
//         "/users",
//         "/home",
//         "/roles",
//         "/vendor",
//         "/orders",
//         "/advertising",
//         "/subscriptions",
//         "/setting",
//       ],
//       handler: authenticatedMiddleWare,
//     },
//     {
//       matcher: ["/login", "/register"],
//       handler: unAuthenticatedMiddleWare,
//     },
//   ],
// };
