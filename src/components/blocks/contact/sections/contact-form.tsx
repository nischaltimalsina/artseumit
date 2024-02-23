import { Button, Input, Textarea } from '@/components/ui';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { sendMail } from '@/lib/mail';

export const ContactForm = () => {
  const send = async () => {
    'use server';
    await sendMail({
      to: 'sakuradev23@gmail.com',
      name: 'Vahid',
      subject: 'Inquiry Submitted',
      body: template({
        title: '',
        name: '',
        email: '',
        phone: '',
        category: '',
        message: '',
      }),
    });
  };
  return (
    <section className='w-full'>
      <div className='flex flex-col gap-x-12 gap-y-8 w-full max-w-screen-2xl mx-auto p-5 items-center '>
        <div className='w-full max-w-3xl'>
          <form className='flex flex-col gap-4'>
            <Input
              required
              type='text'
              className='h-14 border-secondary-foreground text-base'
              placeholder='Enter Your Fullname'
            />
            <Input
              required
              className='h-14 border-secondary-foreground text-base'
              placeholder='Enter Your Email'
            />
            <Input
              className='h-14 border-secondary-foreground text-base'
              placeholder='Enter Your Contact Number (optional)'
            />
            <Select required>
              <SelectTrigger className='h-14 border-secondary-foreground text-base text-muted-foreground'>
                <SelectValue placeholder='Select a category' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value='branding_content'>
                    Branding and Production
                  </SelectItem>
                  <SelectItem value='graphic_design'>Graphic Design</SelectItem>
                  <SelectItem value='web_development'>
                    Web Development
                  </SelectItem>
                  <SelectItem value='mobile_development'>
                    Mobile Development
                  </SelectItem>
                  <SelectItem value='digital_marketing'>
                    Digital Marketing
                  </SelectItem>
                  <SelectItem value='social_media_mgmt'>
                    Social Media Management
                  </SelectItem>
                  <SelectItem value='3d_animation'>3D & Animation</SelectItem>
                  <SelectItem value='others'>Others</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
              className='min-h-36 border-secondary-foreground text-base'
              placeholder='Write your message here ..'
            />
            <Button formAction={send} className='h-14 uppercase text-base'>
              Send Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
