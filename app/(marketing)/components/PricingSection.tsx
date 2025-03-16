"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HeroSection() {
  return (
    <>
      <section id="pricing" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    Perfect for small businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">$10/mo</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />1 Menu
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Unlimited QR Codes
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Basic Analytics
                    </li>
                  </ul>
                </CardContent>
              </div>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between border-primary">
              <div>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For growing restaurants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">$29/mo</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Up to 5 Menus
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Advanced Analytics
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Custom Branding
                    </li>
                  </ul>
                </CardContent>
              </div>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For restaurant chains</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">Custom</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Unlimited Menus
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Priority Support
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Custom Integration
                    </li>
                  </ul>
                </CardContent>
              </div>
              <CardContent>
                <Button className="w-full" variant="outline" onClick={() => {}}>
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
