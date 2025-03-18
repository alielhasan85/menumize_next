// Import the LoginForm component from the specified path
import { LoginForm } from "@/app/(auth)/sign-in/login-form";

// Define the default export function named LoginPage
export default function LoginPage() {
  // Return a JSX element
  return (
    // A div container with responsive width classes
    <div className="w-full max-w-sm md:max-w-3xl">
      {/* Render the LoginForm component inside the div */}
      <LoginForm />
    </div>
  );
}
