
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { KeyRound, Mail, RotateCcw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AshokChakra from '@/components/AshokChakra';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const emailFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const otpFormSchema = z.object({
  otp: z.string().length(6, { message: "OTP must be 6 digits" }),
});

const resetPasswordFormSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const ForgotPassword = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  
  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const otpForm = useForm<z.infer<typeof otpFormSchema>>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const resetPasswordForm = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmitEmail = (values: z.infer<typeof emailFormSchema>) => {
    console.log(values);
    toast({
      title: "Verification code sent",
      description: "Please check your email for the 6-digit code",
    });
    setStep('otp');
  };

  const onSubmitOtp = (values: z.infer<typeof otpFormSchema>) => {
    console.log(values);
    toast({
      title: "OTP verified",
      description: "You can now reset your password",
    });
    setStep('reset');
  };

  const onSubmitReset = (values: z.infer<typeof resetPasswordFormSchema>) => {
    console.log(values);
    toast({
      title: "Password reset successful",
      description: "Your password has been updated. You can now login",
    });
    // In a real app, this would redirect to login
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mx-auto">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-india-navyBlue/10 p-3 rounded-full">
                  <KeyRound className="h-8 w-8 text-india-saffron" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CardTitle className="text-xl font-bold text-india-navyBlue">
                  {step === 'email' && "Reset Your Password"}
                  {step === 'otp' && "Verify OTP"}
                  {step === 'reset' && "Create New Password"}
                </CardTitle>
                <AshokChakra size="sm" className="ml-2" />
              </div>
              <CardDescription className="text-gray-600">
                {step === 'email' && "Enter your email to receive a verification code"}
                {step === 'otp' && "Enter the 6-digit code sent to your email"}
                {step === 'reset' && "Create a strong, secure password"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 'email' && (
                <Form {...emailForm}>
                  <form onSubmit={emailForm.handleSubmit(onSubmitEmail)} className="space-y-6">
                    <FormField
                      control={emailForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@gov.in" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-india-navyBlue hover:bg-india-navyBlue/90">
                      <Mail className="mr-2 h-4 w-4" /> Send Recovery Code
                    </Button>
                  </form>
                </Form>
              )}

              {step === 'otp' && (
                <Form {...otpForm}>
                  <form onSubmit={otpForm.handleSubmit(onSubmitOtp)} className="space-y-6">
                    <FormField
                      control={otpForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel>Verification Code</FormLabel>
                          <FormControl>
                            <InputOTP maxLength={6} {...field}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} className="border-india-navyBlue/20" />
                                <InputOTPSlot index={1} className="border-india-navyBlue/20" />
                                <InputOTPSlot index={2} className="border-india-navyBlue/20" />
                                <InputOTPSlot index={3} className="border-india-navyBlue/20" />
                                <InputOTPSlot index={4} className="border-india-navyBlue/20" />
                                <InputOTPSlot index={5} className="border-india-navyBlue/20" />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="text-center text-sm mb-4">
                      <Button variant="link" onClick={() => setStep('email')} className="text-india-navyBlue">
                        <RotateCcw className="mr-1 h-3 w-3" /> Request new code
                      </Button>
                    </div>
                    <Button type="submit" className="w-full bg-india-navyBlue hover:bg-india-navyBlue/90">
                      Verify Code
                    </Button>
                  </form>
                </Form>
              )}

              {step === 'reset' && (
                <Form {...resetPasswordForm}>
                  <form onSubmit={resetPasswordForm.handleSubmit(onSubmitReset)} className="space-y-6">
                    <FormField
                      control={resetPasswordForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={resetPasswordForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-india-navyBlue hover:bg-india-navyBlue/90">
                      Reset Password
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                <p>Remember your password?{" "}
                  <Link to="/login" className="font-semibold text-india-saffron hover:underline">
                    Back to Login
                  </Link>
                </p>
              </div>
              <div className="w-full pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/c2ab8b88-6190-49fe-af92-35a0a53524b0.png" 
                    alt="Digital India Initiative" 
                    className="h-6 mr-2"
                  />
                  <p className="text-xs text-gray-500">
                    A Digital India Initiative
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
