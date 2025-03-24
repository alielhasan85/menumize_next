// app/()user_data/profile/page.tsx
// import { completeProfileAction } from "./profile.actions";
// import { Button } from "@/components/ui/button"; // Adjust the import path as needed

"use client"; // So we can use React hooks and directly invoke server actions

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { skipProfileAction } from "@/lib/actions/profile.actions";

export default function ProfilePage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function handleSkip() {
    startTransition(async () => {
      // Call the server action to update DB
      await skipProfileAction();
      // Then redirect the user client-side
      router.push("/dashboard");
    });
  }

  return (
    <div className="w-full max-w-sm md:max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Complete Profile</h1>
      <p>Enter your details and click the button to complete your profile.</p>

      <button
        onClick={handleSkip}
        disabled={isPending}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        {isPending ? "Skipping..." : "Skip"}
      </button>
    </div>
  );
}
