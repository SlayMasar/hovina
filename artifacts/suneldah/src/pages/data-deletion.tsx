import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, Trash2 } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  platform: z.string().min(2, "Please specify which app or service you used"),
  details: z.string().min(10, "Please provide a brief description (at least 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function DataDeletion() {
  const [submitted, setSubmitted] = useState(false);
  const submitContact = useSubmitContact();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      platform: "",
      details: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    submitContact.mutate(
      {
        data: {
          name: values.name,
          email: values.email,
          subject: `[Data Deletion Request] ${values.platform}`,
          message: `Data Deletion Request\n\nPlatform/App: ${values.platform}\n\nDetails:\n${values.details}\n\nPlease delete all personal data associated with this email address from your systems.`,
        },
      },
      {
        onSuccess: () => {
          setSubmitted(true);
        },
        onError: () => {
          form.setError("root", {
            message: "Something went wrong. Please try again or reach out directly.",
          });
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 max-w-2xl pt-32 pb-24">

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <Trash2 className="w-5 h-5 text-destructive" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">User Data Deletion</h1>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            You have the right to request deletion of your personal data from any Hovina product or service. Fill in the form below and we will process your request within 30 days.
          </p>
        </div>

        <div className="bg-muted/40 border border-border rounded-xl p-5 mb-10 space-y-2 text-sm text-muted-foreground">
          <p>This form applies to all Hovina products including websites, WhatsApp bots, AI agents, and any other services we operate.</p>
          <p>Once your request is received, we will confirm via email and delete all personal data associated with your account within <strong className="text-foreground">30 days</strong>.</p>
          <p>For questions about our data practices, see our <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>.</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 space-y-4"
          >
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">Request Received</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your data deletion request has been submitted. We will confirm via email and complete the deletion within 30 days.
            </p>
          </motion.div>
        ) : (
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/60 to-primary" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Full Name</FormLabel>
                        <FormControl>
                          <Input data-testid="input-name" placeholder="Your full name" className="h-12 border-border focus-visible:ring-primary" {...field} />
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
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Email Address</FormLabel>
                        <FormControl>
                          <Input data-testid="input-email" placeholder="Email linked to your account" type="email" className="h-12 border-border focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="platform"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">App / Service / Platform</FormLabel>
                      <FormControl>
                        <Input
                          data-testid="input-platform"
                          placeholder="e.g. Hovina WhatsApp bot, hovina.com, etc."
                          className="h-12 border-border focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Additional Details (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          data-testid="textarea-details"
                          placeholder="Any additional information to help us locate your data..."
                          className="min-h-[120px] border-border resize-y focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.formState.errors.root && (
                  <p className="text-sm text-destructive">{form.formState.errors.root.message}</p>
                )}

                <Button
                  data-testid="button-submit"
                  type="submit"
                  variant="destructive"
                  className="w-full h-14 text-lg font-bold gap-2 transition-all"
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Trash2 className="w-5 h-5" />
                      Submit Deletion Request
                    </>
                  )}
                </Button>

              </form>
            </Form>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
