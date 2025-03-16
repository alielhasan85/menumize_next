import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RestaurantDirectorySection() {
  return (
    <>
      {/* Add this new section before the footer */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Discover Restaurants
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Browse our directory of restaurants using digital menus. Find
                new places to eat and explore their menus before you visit.
              </p>
            </div>
            <Button size="lg" variant="outline" asChild>
              <Link href="/business">View Restaurant Directory</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
