"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { completeProfileAction } from "@/lib/actions/profile.actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileSchema,
  type ProfileSchema,
} from "@/lib/validators/user.validator";

export default function ProfilePage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      phone: "",
      businessName: "",
      country: "",
    },
  });

  async function onSubmit(values: ProfileSchema) {
    startTransition(async () => {
      // Call the server action to update the profile.
      await completeProfileAction(values);
      // Redirect to the dashboard after updating.
      router.push("/dashboard");
    });
  }

  // async function handleSkip() {
  //   startTransition(async () => {
  //     await skipProfileAction();
  //     router.push("/dashboard");
  //   });
  // }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle className="text-center">Welcome to Menumize</CardTitle>
          <CardDescription className="text-center">
            Tell us about yourself, what is your name?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Field with Country Code Dropdown */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <div className="flex">
                      {/* Country Code Dropdown */}
                      <select className="rounded-l border border-gray-300 px-2 py-2">
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        {/* Add more country codes as needed */}
                      </select>
                      <FormControl>
                        <Input
                          placeholder="Phone number"
                          {...field}
                          className="rounded-r"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Business Name Field */}
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your business name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country Field */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Your country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Submitting..." : "Start Free Trial"}
                </Button>
                {/* <Button
                  variant="outline"
                  onClick={handleSkip}
                  className="w-full"
                  disabled={isPending}
                >
                  {isPending ? "Skipping..." : "Skip"}
                </Button> */}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
