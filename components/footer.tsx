import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12 border-t bg-[#FFFFFF]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <div className="space-y-2">
            <Link href="/" className="block hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="block hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="block hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="block hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <div className="space-y-2">
            <Link href="/payment" className="block hover:text-primary">
              Payment Options
            </Link>
            <Link href="/returns" className="block hover:text-primary">
              Returns
            </Link>
            <Link href="/privacy" className="block hover:text-primary">
              Privacy Policies
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Address</h3>
          <p className="text-sm text-gray-600">
           Alam pride North karachi
            <br />
            Karachi,
            <br />
            Pakistan
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-sm">
        <p>2025 Fizra Amir. All rights reserved</p>
      </div>
    </footer>
  )
}
