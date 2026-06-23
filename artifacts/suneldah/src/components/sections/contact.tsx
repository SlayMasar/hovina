import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

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
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    submitContact.mutate(
      { data: values },
      {
        onSuccess: (data) => {
          toast({
            title: "Message Sent",
            description: data.message || "We will get back to you within 24 hours.",
          });
          form.reset();
        },
        onError: (error: any) => {
          toast({
            variant: "destructive",
            title: "Something went wrong",
            description: error?.response?.data?.error || "Please try again or reach out directly.",
          });
        },
      }
    );
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Build<br/>Together</h2>
            <p className="text-lg text-muted-foreground">
              Ready to bring your idea to life? Tell us what you're working on and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-muted-foreground">We build websites, WhatsApp bots, AI agents, and machine learning systems — for clients and as our own products.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-muted-foreground">Every project starts with understanding your problem deeply before writing a single line of code.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-muted-foreground">We ship products that actually work — no fluff, no empty metrics.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Your Name</FormLabel>
                        <FormControl>
                          <Input data-testid="input-name" placeholder="Enter your name" className="h-12 border-border focus-visible:ring-primary" {...field} />
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
                          <Input data-testid="input-email" placeholder="Enter your email" type="email" className="h-12 border-border focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Subject</FormLabel>
                      <FormControl>
                        <Input data-testid="input-subject" placeholder="What are we building?" className="h-12 border-border focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          data-testid="textarea-message"
                          placeholder="Tell us about your project..."
                          className="min-h-[150px] border-border resize-y focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  data-testid="button-submit"
                  type="submit"
                  className="w-full h-14 text-lg font-bold gap-2 shadow-sm hover:shadow-md transition-all"
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
