"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  companyName: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  streetAddress: z.string().min(5, "Street address is required"),
  townCity: z.string().min(2, "Town/City is required"),
  province: z.string().min(2, "Province is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  additionalInfo: z.string().optional(),
  paymentMethod: z.enum(["directBank", "cashOnDelivery"]),
})

export default function CheckoutPage() {
  const { toast } = useToast()
  const { items, subtotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "directBank",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Implement order submission logic here
      console.log("Order:", { items, billing: values })
      toast({
        title: "Success",
        description: "Your order has been placed successfully.",
      })
      clearCart()
      // Redirect to success page
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to place order. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8E7]">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[240px] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Checkout-BirfKt6XBax0SpBql7rBxXBjaHH4aK.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Checkout</h1>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Checkout</span>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Billing Details Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Billing details</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name (Optional)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country / Region</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="streetAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="townCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Town / City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Province</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a province" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="western">Western Province</SelectItem>
                          <SelectItem value="central">Central Province</SelectItem>
                          <SelectItem value="southern">Southern Province</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZIP code</FormLabel>
                      <FormControl>
                        <Input {...field} />
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
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
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
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Notes about your order, e.g. special notes for delivery"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <h3 className="font-bold">Payment Method</h3>
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <RadioGroupItem value="directBank" id="directBank" />
                              <div>
                                <label htmlFor="directBank" className="font-medium block mb-1 cursor-pointer">
                                  Direct Bank Transfer
                                </label>
                                <p className="text-sm text-gray-600">
                                  Make your payment directly into our bank account. Please use your Order ID as the
                                  payment reference. Your order will not be shipped until the funds have cleared in our
                                  account.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="cashOnDelivery" id="cashOnDelivery" />
                              <label htmlFor="cashOnDelivery" className="font-medium cursor-pointer">
                                Cash On Delivery
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-6">
                    Your personal data will be used to support your experience throughout this website, to manage access
                    to your account, and for other purposes described in our{" "}
                    <Link href="/privacy-policy" className="underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Place order"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Your Order</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b">
                  <span className="font-medium">Product</span>
                  <span className="font-medium">Subtotal</span>
                </div>
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-4 border-t">
                  <span className="font-medium">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t font-bold">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  )
}

