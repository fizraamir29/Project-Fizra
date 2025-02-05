"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()

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
      <div className="relative h-[240px] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cart-WZySg6xwP00BeewfhKJBNfbBNst0ay.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Cart</h1>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">Product</th>
                    <th className="text-left py-4">Price</th>
                    <th className="text-left py-4">Quantity</th>
                    <th className="text-left py-4">Subtotal</th>
                    <th className="py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={`${item.id}-${item.size}-${item.color}`} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-20">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <Link href={`/shop/${item.id}`} className="font-medium hover:text-primary">
                              {item.name}
                            </Link>
                            {item.size && <p className="text-sm text-gray-600">Size: {item.size}</p>}
                            {item.color && (
                              <div className="flex items-center gap-1">
                                <span className="text-sm text-gray-600">Color:</span>
                                <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: item.color }} />
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4">{formatPrice(item.price)}</td>
                      <td className="py-4">
                        <div className="flex items-center border rounded-md w-fit">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-4">{formatPrice(item.price * item.quantity)}</td>
                      <td className="py-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-gray-900"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart Totals */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <Link href="/checkout">
                  <Button className="w-full">Proceed to Checkout</Button>
                </Link>
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

