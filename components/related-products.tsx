import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/data/products" // Ensure this path is correct

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Filter products by category and exclude the current product
  const relatedProducts = products.filter(
    (p) => p.category === category && p.id !== currentProductId
  )

  if (relatedProducts.length === 0) {
    return null // Don't render anything if there are no related products
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="border-none shadow-none">
            <CardContent className="p-0">
              <Link href={`/shop/${product.id}`}>
                <Image
                  src={product.images.length > 0 ? product.images[0] : "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover mb-4"
                />
                <h3 className="text-sm mb-2">{product.name}</h3>
                <p className="font-semibold">Rs. {product.price}</p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/shop" className="text-sm font-medium hover:underline">
          View More
        </Link>
      </div>
    </section>
  )
}
