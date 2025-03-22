"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

import signupImg from "@/public/login-img.jpg";
import googleIcon from "@/public/google.svg";
import { useState } from "react";
import TermsOfServiceModal from "@/app/(marketing)/modals/TermsOfServiceModal";
import PrivacyPolicyModal from "@/app/(marketing)/modals/PrivacyPolicyModal";
import { signIn } from "next-auth/react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Create an account</h1>
                  <p className="text-muted-foreground text-balance">
                    Sign up for your MenuMize account
                  </p>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </div>
                <div className="flex">
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full relative"
                    onClick={() =>
                      signIn("google", { callbackUrl: "/dashboard" })
                    }
                  >
                    <Image
                      src={googleIcon}
                      alt="google"
                      className="h-6 w-6 object-cover"
                    />
                    <span>Login with Google</span>
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="underline underline-offset-4"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
            <div className="bg-muted relative hidden md:block">
              <Image
                src={signupImg}
                alt="Sign up image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
        <div className="text-muted-foreground text-center text-xs">
          By clicking continue, you agree to our{" "}
          <button
            className="text-xs text-primary cursor-pointer hover:underline underline-offset-4"
            onClick={() => setIsTermsOpen(true)}
          >
            Terms of Service
          </button>{" "}
          and{" "}
          <button
            className="text-xs text-primary cursor-pointer hover:underline underline-offset-4"
            onClick={() => setIsPrivacyOpen(true)}
          >
            Privacy Policy
          </button>
          .
        </div>
      </div>
      <TermsOfServiceModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </>
  );
}
