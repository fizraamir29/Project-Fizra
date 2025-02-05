import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog/blog-card"
import { CategoriesWidget } from "@/components/blog/categories-widget"
import { RecentPostsWidget } from "@/components/blog/recent-posts-widget"
import { Input } from "@/components/ui/input"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[240px] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog_optimized_5000-dodOraORm9lC7e1YAL6GAFcQvjioND.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} featured={index === 0} />
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded">1</span>
              <Link
                href="/blog/page/2"
                className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white rounded"
              >
                2
              </Link>
              <Link
                href="/blog/page/3"
                className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white rounded"
              >
                3
              </Link>
              <Link
                href="/blog/page/2"
                className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white rounded"
              >
                Next
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="relative">
              <Input type="search" placeholder="Search..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            {/* Categories */}
            <CategoriesWidget />

            {/* Recent Posts */}
            <RecentPostsWidget />
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  )
}

