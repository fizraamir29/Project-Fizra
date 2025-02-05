"use client"

import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"

export function CartSheet() {
  const { items, removeItem, updateQuantity, isCartOpen, setIsCartOpen, subtotal } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex w-full flex-col gap-5 pr-6">
          {items.length > 0 ? (
            <>
              <div className="flex-1 overflow-auto">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-start gap-4 py-4">
                    <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold">{item.name}</h4>
                          {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                          {item.color && (
                            <div className="flex items-center gap-1">
                              <span className="text-sm text-gray-500">Color:</span>
                              <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: item.color }} />
                            </div>
                          )}
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-gray-900">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="h-7 w-7 rounded-md border"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-7 w-7 rounded-md border"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-base font-semibold">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="grid gap-2">
                  <Link href="/cart">
                    <Button className="w-full" variant="outline" onClick={() => setIsCartOpen(false)}>
                      View Cart
                    </Button>
                  </Link>
                  <Link href="/checkout">
                    <Button className="w-full" onClick={() => setIsCartOpen(false)}>
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center space-y-2">
              <div className="text-xl font-medium">Your cart is empty</div>
              <Button variant="outline" size="sm" className="text-sm" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

