"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      console.log(values)
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
      })
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      <div className="relative h-[240px] bg-[url('https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQPrH-LHXX0zenSKKpc-sLIci25MKO3puyNqtuDGzng-za0mXDnFK~fdrnRrE11Rr4bvNl6mDm~jJNVEG61IP-v5hgG6yUjvY8058T45TF4DFTT14kAwRn8yQ7BDcfCa88z8QPgDH8yKa~ISZcnw~zs1ajnNVRtP1NaUf47VtVxrLaPi0mTSld4s9pOdZmhcvJUAAqsMTVmccLu-2sBaAkTOmyTqahZgwFt97jKivFT2MNcojQ4hebN2PGEtHrdmSuq0nDd-Wq0ro5FIpGW1e2p5Kj4-0mdM03mBWxQpQL8KfeyIXKUnG~QTfT3rbVQcC3DHxifSrqXxW8K2JVyZPw__')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be
            There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-gray-600">Alam Pride, North Karachi</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">Mobile: 03183919074</p>
              </div>
            </div>
          </div>

          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name</FormLabel>
                      <FormControl>
                        <Input placeholder="Fizra" {...field} />
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
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input placeholder="fizraamir3@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  )
}
