import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import type { BlogPost } from "@/types/blog"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={`space-y-4 ${featured ? "mb-8" : ""}`}>
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </Link>
      <div className="space-y-2">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <Link href={`/blog/category/${post.category.toLowerCase()}`} className="text-primary">
            {post.category}
          </Link>
        </div>
        <h2 className={`font-bold ${featured ? "text-2xl" : "text-xl"}`}>
          <Link href={`/blog/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="inline-block text-sm font-medium hover:underline">
          Read more
        </Link>
      </div>
    </article>
  )
}

