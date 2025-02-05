"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Heart, Linkedin, Minus, Plus, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"
import { RelatedProducts } from "@/components/related-products"
import { cn } from "@/lib/utils"
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { products } from "@/data/products"
import { useToast } from "@/components/ui/use-toast"

export default function ProductDetail() {
  const params = useParams()
  const product = products.find((p) => p.id === params.slug)
  const { toast } = useToast()
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product?.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

  if (!product) {
    return <div>Product not found</div>
  }

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1)
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      })
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/shop">Shop</Link>
          <span>/</span>
          <span className="text-gray-500">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductGallery images={product.images} />

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="text-2xl">Rs. {product.price.toLocaleString()}</div>

            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={cn(
                      "w-5 h-5",
                      star <= Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 fill-current",
                    )}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.reviews} Customer Review</span>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={cn(
                        "w-8 h-8 rounded-full border-2",
                        selectedColor === color ? "border-black" : "border-transparent",
                      )}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon" onClick={() => handleQuantityChange("decrease")}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => handleQuantityChange("increase")}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button onClick={handleAddToCart} className="flex-1">
                  Add To Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleWishlist}
                  className={cn(isInWishlist(product.id) && "text-red-500")}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">SKU:</span> {product.sku}
                  </div>
                  <div>
                    <span className="font-medium">Category:</span> {product.category}
                  </div>
                  <div>
                    <span className="font-medium">Tags:</span> {product.tags.join(", ")}
                  </div>
                  <div>
                    <span className="font-medium">Share:</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Button variant="ghost" size="icon">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="description"
              className={cn("rounded-none pb-4 px-8", activeTab === "description" ? "border-b-2 border-black" : "")}
              onClick={() => setActiveTab("description")}
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              className={cn("rounded-none pb-4 px-8", activeTab === "additional" ? "border-b-2 border-black" : "")}
              onClick={() => setActiveTab("additional")}
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className={cn("rounded-none pb-4 px-8", activeTab === "reviews" ? "border-b-2 border-black" : "")}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({product.reviews})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6">
            <p className="text-gray-600">{product.longDescription}</p>
          </TabsContent>
          <TabsContent value="additional" className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium">Dimensions</div>
                <div>{product.specifications.dimensions}</div>
                <div className="font-medium">Weight</div>
                <div>{product.specifications.weight}</div>
                <div className="font-medium">Materials</div>
                <div>{product.specifications.materials.join(", ")}</div>
                <div className="font-medium">Warranty</div>
                <div>{product.specifications.warranty}</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-6">
              {/* Add review components here */}
              <p>No reviews yet.</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} category={product.category} />

      <Features />
      <Footer />
    </div>
  )
}

