"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import forgotPasswordImg from "@/public/login-img.jpg";
import TermsOfServiceModal from "@/app/(marketing)/modals/TermsOfServiceModal";
import PrivacyPolicyModal from "@/app/(marketing)/modals/PrivacyPolicyModal";

export function ForgotPasswordForm({
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
                  <h1 className="text-2xl font-bold">Forgot Password</h1>
                  <p className="text-muted-foreground text-balance">
                    Enter your email address to receive a password reset link.
                  </p>
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
                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
                <div className="text-center text-sm">
                  Remember your password?{" "}
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
                src={forgotPasswordImg}
                alt="Forgot password image"
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
