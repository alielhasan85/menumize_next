import { EllipsisVertical, QrCode, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
// import ModeToggle from './mode-toggle';

export default function Menu() {
  return (
    <>
      <div className="flex justify-end">
        <nav className="md:flex hidden w-full max-w-xs gap-6 items-center">
          <a className="text-sm font-medium hover:underline" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline" href="#pricing">
            Pricing
          </a>
          <Button asChild>
            <Link href="https://platform.menumize.com">
              <UserIcon className="mr-2 h-4 w-4" />
              Sign In
            </Link>
          </Button>
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <SheetTitle>
                <div className="flex items-center m-3">
                  <QrCode className="h-6 w-6 mr-2" />
                  <span className="font-['cinzel'] text-3xl font-bold text-['#ff5e1e']">
                    {APP_NAME}
                  </span>
                </div>
              </SheetTitle>
              <Separator />
              {/* <ModeToggle /> */}
              <div className="flex flex-col items-start w-full gap-4 p-4">
                <a
                  className="text-sm font-medium hover:underline"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="text-sm font-medium hover:underline"
                  href="#pricing"
                >
                  Pricing
                </a>
              </div>

              <Button asChild>
                <Link href="https://platform.menumize.com">
                  <UserIcon className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
}
