"use client"

import Link from "next/link"
import { Heart, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const { setIsCartOpen, items } = useCart()

  return (
    <header className="container mx-auto p-4 bg-[#FBEBB5]">
      <nav className="flex items-center justify-end space-x-6">
      <Link href="/" className="text-lg">
          Home
        </Link>
        <Link href="/shop" className="text-lg">
          Shop
        </Link>
        <Link href="/about" className="text-lg">
          About
        </Link>
        <Link href="/contact" className="text-lg">
          Contact
        </Link>
        <Link href="/account">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </Link>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-xs text-white flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </nav>
    </header>
  )
}
