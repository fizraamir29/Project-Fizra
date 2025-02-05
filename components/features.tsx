import { Package, RefreshCw, ShieldCheck } from "lucide-react"

export function Features() {
  return (
    <section className="container mx-auto px-4 py-12 bg-[#FFF8E7]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Package className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
          <p className="text-gray-600">For all orders over $50, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center">
          <RefreshCw className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">90 Days Return</h3>
          <p className="text-gray-600">If goods have problems, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">100% secure payment, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  )
}

