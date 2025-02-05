import Link from "next/link"
import { categories } from "@/data/blog-posts"

export function CategoriesWidget() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.slug} className="flex items-center justify-between">
            <Link href={`/blog/category/${category.slug}`} className="hover:text-primary">
              {category.name}
            </Link>
            <span className="text-gray-600">({category.count})</span>
          </div>
        ))}
      </div>
    </div>
  )
}

