'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '../../../components/ui/form';

// Define the form schema using Zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters long.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  websiteName: z.string().min(2, { message: 'Website name must be at least 2 characters long.' }),
  domainName: z.string().min(2, { message: 'Domain name must be at least 2 characters long.' }),
  priceRange: z.string().min(2, {message: "Price range is required"}),
  allowedContentType: z.string().min(2, {message: "Content type is required"}),
  siteDescription: z.string().min(10, { message: 'Site description must be at least 10 characters long.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProfileForm() {
  const { toast } = useToast()
  const methods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset, // Add this to reset the form on successful submission
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your request has been successfully submitted.'
        });
        reset(); // Reset the form fields after successful submission
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem on our servers. Try again later.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Network Error',
        description: 'Please check your internet connection and try again.',
      });
    }
  };

  return (

   <FormProvider {...methods} >
     <section className="relative">
      <div className="mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2  text-gray-700">Become a seller</h1>
            <p className='text-gray-600 text-center'>Hello there! Please fill in the following details and our team will review them to add your site to the platform.</p>
          </div>

          <div className="max-w-sm mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormItem>
              <FormLabel className='text-gray-700'>Full Name</FormLabel>
              <FormControl>
                <Input {...register("fullName")} className="text-gray-700 border-gray-400" />
              </FormControl>
              {errors.fullName && <FormMessage>{errors.fullName.message}</FormMessage>}
            </FormItem>

            <FormItem>
              <FormLabel className='text-gray-700'>Email</FormLabel>
              <FormControl>
                <Input type="email" {...register("email")} className="text-gray-700 border-gray-400" />
              </FormControl>
              {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
            </FormItem>

            <FormItem>
              <FormLabel className='text-gray-700'>Website Name</FormLabel>
              <FormControl>
                <Input {...register("websiteName")} className="text-gray-700  border-gray-400" />
              </FormControl>
              {errors.websiteName && <FormMessage>{errors.websiteName.message}</FormMessage>}
            </FormItem>

            <FormItem>
              <FormLabel className='text-gray-700'>Domain Name</FormLabel>
              <FormControl>
                <Input {...register("domainName")} className="text-gray-700 border-gray-400" />
              </FormControl>
              {errors.domainName && <FormMessage>{errors.domainName.message}</FormMessage>}
            </FormItem>

            <FormItem>
              <FormLabel className='text-gray-700'>Price Range</FormLabel>
              <FormControl>
                <Input {...register("priceRange")} className="text-gray-700 border-gray-400" />
              </FormControl>
              {errors.priceRange && <FormMessage>{errors.priceRange.message}</FormMessage>}
            </FormItem>

            <FormItem>
              <FormLabel className='text-gray-700'>Allowed Content Type</FormLabel>
              <FormControl>
                <Input {...register("allowedContentType")} className="text-gray-700 border-gray-400" />
              </FormControl>
              {errors.allowedContentType && <FormMessage>{errors.allowedContentType.message}</FormMessage>}
              <FormDescription>Enter all allowed content types in comma seperated formart.</FormDescription>
            </FormItem>

            <FormItem>
              <FormLabel className='text-gray-700'>Site Description</FormLabel>
              <FormControl>
                <Textarea {...register("siteDescription")} className="text-gray-700 border-gray-400"/>
                
              </FormControl>
              {errors.siteDescription && <FormMessage>{errors.siteDescription.message}</FormMessage>}
              <FormDescription>Provide full description of your site.</FormDescription>
            </FormItem>

            <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
          </div>
        </div>
      </div>
    </section>
   </FormProvider>
  )
}

