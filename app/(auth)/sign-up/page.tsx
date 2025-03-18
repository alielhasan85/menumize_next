// Import the SignUpForm component from the specified path
import { SignUpForm } from "@/app/(auth)/sign-up/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl">
      <SignUpForm />
    </div>
  );
}
