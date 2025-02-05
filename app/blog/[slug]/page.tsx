"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { CategoriesWidget } from "@/components/blog/categories-widget"
import { RecentPostsWidget } from "@/components/blog/recent-posts-widget"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPostPage() {
  const params = useParams()
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[240px] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog_optimized_5000-dodOraORm9lC7e1YAL6GAFcQvjioND.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <article className="space-y-6">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
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
              <div className="prose max-w-none">
                <p>{post.content}</p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <CategoriesWidget />
            <RecentPostsWidget />
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  )
}

