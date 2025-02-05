export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  date: string
  author: string
  category: string
  image: string
  readTime?: string
}

export interface Category {
  name: string
  count: number
  slug: string
}

