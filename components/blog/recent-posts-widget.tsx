import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"

export function RecentPostsWidget() {
  const recentPosts = blogPosts.slice(0, 4)

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <Link href={`/blog/${post.slug}`} className="relative w-20 h-20 flex-shrink-0">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded" />
            </Link>
            <div className="space-y-1">
              <Link href={`/blog/${post.slug}`} className="font-medium hover:text-primary line-clamp-2">
                {post.title}
              </Link>
              <p className="text-sm text-gray-600">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

