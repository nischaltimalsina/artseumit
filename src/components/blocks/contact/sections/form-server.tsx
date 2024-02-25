import React, { useState } from 'react';
import { ContactForm } from './contact-form';
import { template } from '@/components/templates/template';
import { Button } from '@/components/ui';
import { sendMail } from '@/lib/mail';

interface SendMailProps {
  sendMail: (data: {
    to: string;
    name: string;
    subject: string;
    body: string;
  }) => Promise<void>;
  data: {
    name: string;
    email: string;
    phone?: string;
    category: string;
    message: string;
  };
}

export default function ContactFormServer({ data }: SendMailProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await sendMail({
        to: `ntmalcna@gmail.com,thelunaticlad@gmail.com`,
        subject: 'Inquiry Submitted',
        body: template(data),
      });
      // Handle success
    } catch (error) {
      // Handle errors
    } finally {
      setIsSubmitting(false);
    }
  };

  return <Button onClick={() => handleSubmit}> Send Enquiry</Button>;
}
