import type { BlogPost, Category } from "@/types/blog"

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Going all-in with millennial design",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In hac habitasse platea dictumst quisque sagittis purus sit.",
    content: "Full content here...",
    slug: "going-all-in-with-millennial-design",
    date: "14 Oct 2023",
    author: "Admin",
    category: "Wood",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Exploring new ways of decorating",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
    content: "Full content here...",
    slug: "exploring-new-ways-of-decorating",
    date: "14 Oct 2023",
    author: "Admin",
    category: "Handmade",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Handmade pieces that took time to make",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
    content: "Full content here...",
    slug: "handmade-pieces-that-took-time-to-make",
    date: "14 Oct 2023",
    author: "Admin",
    category: "Wood",
    image: "/placeholder.svg",
  },
]

export const categories: Category[] = [
  { name: "Design", count: 9, slug: "design" },
  { name: "Handmade", count: 7, slug: "handmade" },
  { name: "Interior", count: 1, slug: "interior" },
  { name: "Wood", count: 5, slug: "wood" },
]

