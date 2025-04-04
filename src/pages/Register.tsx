import React from 'react';
import { Link } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import AshokChakra from '@/components/AshokChakra';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import digitalIndiaLogo from '@/assets/digital-india-logo.png';

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
  department: z.string().min(1, { message: "Please select your department" }),
  agencyId: z.string().min(3, { message: "Please enter a valid Agency ID" }),
  termsAndConditions: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Register = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      department: "",
      agencyId: "",
      termsAndConditions: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Registration successful",
      description: "Your account has been created",
    });
  };

  return (
    <>
      <Header />

      <div className="flex min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8 mx-auto">

          {/* Digital India Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={digitalIndiaLogo}
              alt="Digital India Initiative"
              className="h-24"
            />
          </div>

          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-blue-900">ChakraShield Registration</CardTitle>
              <CardDescription>Secure access for verified government agencies</CardDescription>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <FormControl>
                          <Input placeholder="Cybersecurity Division" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agencyId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Agency ID</FormLabel>
                        <FormControl>
                          <Input placeholder="AGCY123456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="termsAndConditions"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          I agree to the{" "}
                          <Link to="/terms" className="underline">
                            Terms and Conditions
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-blue-800 text-white hover:bg-blue-900">
                    Register
                  </Button>
                </form>
              </Form>
            </CardContent>

            <CardFooter className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 underline ml-1">
                Login
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
