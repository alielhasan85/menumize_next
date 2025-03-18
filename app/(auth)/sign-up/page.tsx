// app/(auth)/sign-up/page.tsx
import { SignUpForm } from "./sign-up-form";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl">
      <SignUpForm />
    </div>
  );
}
