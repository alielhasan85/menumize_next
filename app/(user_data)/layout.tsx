// app/(user_data)/layout.tsx
import { auth } from "@/auth"; 
import { redirect } from "next/navigation";



export default async function UserDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // If not logged in, redirect to sign-in
  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-10 bg-background">
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  );
}
