// "use server";

// import { cookies } from "next/headers";
// import { auth } from "@/auth";
// import { redirect } from "next/navigation";
// import { prisma } from "@/db/prisma";

// export async function completeProfileAction(formData: FormData) {
//   // If needed for debugging, await cookies() first.
//   const cookieStore = await cookies();
//   const allCookies = cookieStore.getAll();
//   console.log("Cookies in server action:", allCookies);

//   const session = await auth();
//   console.log("Session in server action:", session);

//   // if (!session || !session.user?.email) {
//   //   throw new Error("Unauthorized");
//   // }

//   // await prisma.user.update({
//   //   where: { email: session.user.email },
//   //   data: { profileComplete: true },
//   // });

//   redirect("/dashboard");
// }
