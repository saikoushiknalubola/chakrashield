import React from 'react';
                src="https://i.postimg.cc/3N0Fv5yR/digital-india-logo.png"
                alt="Digital India Logo"
                className="h-20 mx-auto"
              />
              <CardTitle className="text-center">Register Your Agency</CardTitle>
              <CardDescription className="text-center">
                Sign up to protect the digital space
              </CardDescription>
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
                        <FormControl><Input placeholder="Enter your full name" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input placeholder="Enter your email" {...field} /></FormControl>
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
                        <FormControl><Input type="password" placeholder="Enter password" {...field} /></FormControl>
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
                        <FormControl><Input type="password" placeholder="Re-enter password" {...field} /></FormControl>
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
                        <FormControl><Input placeholder="Department name" {...field} /></FormControl>
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
                        <FormControl><Input placeholder="Unique agency ID" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="termsAndConditions"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>I agree to the terms and conditions</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">Register</Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="text-sm text-center">
              Already have an account? <Link to="/login" className="text-blue-500 ml-1">Login</Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
