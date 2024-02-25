'use client';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Textarea,
  toast,
} from '@/components/ui';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { template } from '@/components/templates/template';
import { Icons } from '@/assets/data/icons';

const formSchema = z.object({
  name: z
    .string({
      required_error: 'Full Name cannot be empty.',
    })
    .min(3, {
      message: 'Name must be at least 3 characters.',
    }),
  email: z
    .string({
      required_error: 'Email cannot be empty.',
    })
    .email({
      message: 'Enter a valid email',
    }),
  phone: z.string().optional(),
  category: z.string({
    required_error: 'Category must be selected',
  }),
  message: z
    .string({
      required_error: 'message cannot be empty.',
    })
    .min(3, {
      message: 'Message must be at least 3 characters.',
    }),
});
type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const defaultValues: Partial<FormValues> = {
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  };
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  });

  const [payload, setPayload] = useState({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: FormValues) {
    setLoading(true);
    setPayload({
      to: data.email,
      subject: `Inquiry from ${data.name}`,
      body: template(data),
    });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: 'Yay!!',
          description: 'Email Sent Successfully',
          duration: 2000,
        });
        form.reset();
      } else {
        toast({
          title: 'Oops!!',
          description: 'Something Went Wrong, please try again!',
        });
      }
      setLoading(false);
    } catch (error) {
      toast({
        title: 'Oops!!',
        description: 'Something Went Wrong, please try again!',
      });
    }
  }

  return (
    <section className="w-full">
      <div className="flex flex-col gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto p-5 items-center ">
        <div className="w-full max-w-3xl">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 "
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-14 border-secondary-foreground text-base"
                        placeholder="Fullname"
                        {...field}
                      />
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
                    <FormControl>
                      <Input
                        className="h-14 border-secondary-foreground text-base"
                        placeholder="Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-14 border-secondary-foreground text-base"
                        placeholder="Contact Number (optional)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-14 border-secondary-foreground text-base text-muted-foreground">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Categories</SelectLabel>
                          <SelectItem value="Branding and Production">
                            Branding and Production
                          </SelectItem>
                          <SelectItem value="Graphic Design">
                            Graphic Design
                          </SelectItem>
                          <SelectItem value="Web Development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="Mobile Development">
                            Mobile Development
                          </SelectItem>
                          <SelectItem value="Digital Marketing">
                            Digital Marketing
                          </SelectItem>
                          <SelectItem value="Social Media Management">
                            Social Media Management
                          </SelectItem>
                          <SelectItem value=" 3D & Animation">
                            3D & Animation
                          </SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="min-h-36 border-secondary-foreground text-base"
                        placeholder="Write your message here .."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                type="submit"
                className="h-14 uppercase text-base gap-5"
              >
                {loading && <Icons.spinner className="animate-spin" />}
                Send Enquiry
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
