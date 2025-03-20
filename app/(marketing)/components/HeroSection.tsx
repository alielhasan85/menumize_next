// app/(marketing)/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2 ">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Transform Your Menu Experience
          </h1>
          <p className="mx-auto max-w-[700px] text-secondary md:text-xl">
            Create beautiful digital menus with instant QR codes. Help your
            customers order with ease while you manage everything from one
            dashboard.
          </p>
        </div>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link href="/delete">Start Free Trial</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/platform">View Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
