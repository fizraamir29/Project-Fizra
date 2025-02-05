import Image from "next/image"
import Link from "next/link"
import { Heart, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

const topPicks = [
  {
    id: "trenton-modular-sofa",
    name: "Trenton modular sofa_3",
    price: 25000.0,
    image: "/placeholder.svg",
  },
  {
    id: "granite-dining-table",
    name: "Granite dining table with chairs",
    price: 25000.0,
    image: "/placeholder.svg",
  },
  {
    id: "outdoor-bar-set",
    name: "Outdoor bar table and stool",
    price: 25000.0,
    image: "/placeholder.svg",
  },
  {
    id: "plain-console",
    name: "Plain console with teak mirror",
    price: 25000.0,
    image: "/placeholder.svg",
  },
]

const blogPosts = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2023",
    readTime: "5 min",
    image: "/placeholder.svg",
    slug: "millennial-design",
  },
  {
    title: "Exploring minimalist design trends",
    date: "12 Jul 2023",
    readTime: "3 min",
    image: "/placeholder.svg",
    slug: "minimalist-trends",
  },
  {
    title: "The art of interior styling",
    date: "28 Jun 2023",
    readTime: "4 min",
    image: "/placeholder.svg",
    slug: "interior-styling",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

{/* Hero Section */}
<section className="container mx-auto px-6 py-16 bg-[#FBEBB5]">
  <div className="flex flex-col md:flex-row items-center justify-start">
    <div className="max-w-lg text-left md:ml-12 mb-8 md:mb-0">
      <h1 className="text-6xl font-extrabold mb-6 leading-tight">Rocket single seater</h1>
      <Link href="/shop">
        <Button className="bg-black text-white hover:bg-black/90 px-6 py-3 text-lg">
          Shop Now
        </Button>
      </Link>
    </div>
    <div className="relative w-full md:w-[700px] lg:w-[800px] h-[450px] lg:h-[500px]">
      <Image
        src="https://s3-alpha-sig.figma.com/img/c19c/62df/bffe1c6f490b48bea0d077f74200bdb9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EAGkU6hkkvRhrCJGv7iNejX~-MtcwZCnCilHSukz8PBTuoSi9lU7~e-RTxo-qn21jjKxK77IzVtO4SNGm8k1ti9Poikn9ma0yVZUjFgtcVjrKIDDy2xBcyDtn71wmJHyWl7-xeq1~nDYlnyhcPYwwGpdRghacgUVvWqDGp57xJwZg8My9l8aPW7qvx26RpYk4JcBE5qcaf0PcSPicvCYlwi5KlrafGxSwylW5hO1iATHFWiLF38V1KYC22Vg4KFxqjJATcDeEKQcJmeBnAnvUUNQYH7e0Qoqwto6xi0CY-uI6m3yXQUAujalsg9DaHhhn2RqIK9bBWaXRrm-jVPXhA__"
        alt="Rocket single seater chair"
        fill
        className="object-contain scale-x-[-1]"
        priority
      />
    </div>
  </div>
</section>

{/* Featured Products */}
<section className="container mx-auto px-4 py-8 bg-[#FAF4F4]">
  <div className="grid md:grid-cols-2 gap-4">
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-4">
        <div className="relative w-full h-[500px]">
          <Image src="https://s3-alpha-sig.figma.com/img/6135/4d75/7488710eda6e83a490b9a06ee6995fbd?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bF1dN4hiyBHTqpGHMN4pPabZ1jW2s20GF1Cy4DIXF62KZ0863jcGro-Y1yeAb3yXg7WrPs8lB2u8aalCnw~B-m7oMq2H4FPxuaySJCkFqsrDhN7NZqHFEdWR9zVOJRDjZRqV4mrRuw2QwIs82m~d38JHVVsmzl9TsWQcJcGfygA--26kIhjnbEXHJ-n5yGv5279KhhPZnbzyzJE6MH9ICXuoyhTDX93qRKCdOTeBfs61sBAqcMJbrN0iywOBcUT0qOGz9rifKKozOjCJgMf0SUZhPjVDMH9IHidZr5VSB-KsMiej5ijrv8msD1Tn1SSXpUgyFs4fgFeFoqA5~9K8WA__" alt="Side table" fill className="object-cover"/>
        </div>
        <h3 className="text-lg font-semibold mt-4">Side Table</h3>
        <p className="text-gray-600">View More</p>
      </CardContent>
    </Card>
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-4">
        <div className="relative w-full h-[500px]">
          <Image src="https://s3-alpha-sig.figma.com/img/be81/bd4e/40d3f8a12c09ade37e094a682f61ed9c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PcoKlbvq5A3-B9Lj00tF1QxxT6cPZ2Vdj9wabZOMoPNtqMxnZA9tPAU1ie~36Y787q5inkWrxpZBvPz9T5Zv5LMwqObP-i7O8ACpFSvg8Pfng1zY2ptpEgJS6shZKNVm045he~QV~PIz~5L14S5xzj3ZzPYdOYl-UoYS2oUKcqVor0pTOM785NukrOoSLkrTvTqYRXnHJcioikExABv8oqky7lEQOvLRKyozQVVC3d4HWVeooyKVMkrxQMi5bX6plMBUzS-l1ZLL626v2eF-SpuSrfMOeUT8S1XW2yOsre3y3588TfmLm2Jyr7fQ05t~gk2UstDm8hUJwNcw1zzHlA__" alt="Side table" fill className="object-cover"/>
        </div>
        <h3 className="text-lg font-semibold mt-4">Side Table</h3>
        <p className="text-gray-600">View More</p>
      </CardContent>
    </Card>
  </div>
</section>

      {/* Top Picks Section */}
      <section className="container mx-auto px-4 py-12 bg-[#FFFFFF]">
        <h2 className="text-3xl font-bold mb-4 text-center">Top Picks For You</h2>
        <p className="text-center text-gray-600 mb-12">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative w-full aspect-square mb-4">
            <Image src="https://s3-alpha-sig.figma.com/img/a924/52e0/58e39805d460c4c63cccc8a518ca116f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFKb~2Zx5dieEjKAdLhSc99uAEO3xFoe5~Mrp8eEDUzXuDcM8gZZB3DoCzqmBN-42teNAKA2IhlIjhs-gEx5fsUxMDvVpkABt0LPl8ng3Km3kStVNIcFyv1BPo-XgEDAanDMejZCmtRR-eROPmYBDqONAb6bAVGYTDSLbGZNXnssqcm0x4tM-C746xIRx5Q6RW5E1E1K4wcq5YYg1tZKERQ-IJceXYhQux4lP4Gow7o7jHkowxfMB-2aeQeVOb-U31GY3y08nwfxIL4wZHSQGj5brqt4b~1BudrqTc06T7P9pkesOyEGLPYqRHzO1qSL5OZJcynpIKwglGhbvBjNew__" alt="Product 1" fill className="object-cover" />
          </div>
          <div className="relative w-full aspect-square mb-4">
            <Image src="https://s3-alpha-sig.figma.com/img/09aa/86df/8158c0cda86398a2874f37f49b06d90d?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp-wjMRvHhO33OpIApTCKdDJ2s7-wtQuGasW10shDx65k2BaOU-9T-5qqzw9yRqwDIqqZyc54ZiQFh1HkuJyfKaJlL0ezke1cCWD4lKYAvcl~Tf7J2gdeteW9~DkvqI9WjBPJzfw0GLcWDO7FYzN9kTg4dYEBUH6U2QD5kN21oN41GAJvCO3i8hBEMpya5z61VVR4ro4zQhn16MS2d8FbwdeE8-UlOtzH5jxhbClbrqJ8H6Sw4xXh9c6QCbL7ogt9TedAgeoUYNUC9ORy39-XNR4uS8DrvO1FxVwnoFpRHvySyAxspnZ938rapMO2VMvFqvNkIxjzqRG2Fxj3hWHA__" alt="Product 2" fill className="object-cover" />
          </div>
          <div className="relative w-full aspect-square mb-4">
            <Image src="https://s3-alpha-sig.figma.com/img/8bbf/604a/28acd7f67bf1de57e6827bf4ce2ed796?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMd-0aRRdztUGrz~5NwaDT72lskQu~1ScjYGF2u6RrQ36RS1X~Sv8KgFk03H4-tBRYBW0t6S7~kHD4spYWHvHRFUTFtzFmm1jGv5rhnfzjAFFpMpXgeS6gD0FwIiYAVjae~57gU2mQly4FWjk-qWuW6zkwLN6C~7PDzMkwZntP~UJN0~PK7BqiSRrHAOWPg1JY9ZSGE~C5WwsrziPc72~xYSurXMRvLTGTx0ekAxljEOQQJGJhM7UkGHCAAhs6Oymp7GjGjfBV4JHqhO39Vn1vRhvvIk0Bzcr6nhe~71qrqIIskBB~AaT1Y7THZLMvgINlJohRJuiQNS9~77RN3XOA__" alt="Product 3" fill className="object-cover" />
          </div>
          <div className="relative w-full aspect-square mb-4">
            <Image src="https://s3-alpha-sig.figma.com/img/1d3d/b619/021f20079d59c4e80115b2d0fd30e46f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRaATE9tMg4mLHtzLqwtrHLknVYsskYkXPYdWxsJgDvas6VpdMq3nETeXBJ4QuoqFgKlnqEh0fzDdhxkzQxpRvcRdbmsl9D5-RFuLCbRZiD21ntw0A7bK~hdLTFYQh11DdnBqm09oDb4d6HGVuuNLR3secjNNiDR5peXeJks2XUC8nSXHt~znIqwnDGkuUhMhWsgfowunYD3NVnPKaL4EtXRlzqgGkORDGocWJzOeY-iaXVPSuOIIdNi7ax937UfZnQT03N-7g3XHXBP80MMQP749GEpVFYe7UP4~sKXEKrlYaYj7onWndTOreAUaH1V1NHSSoqhXCk2mYddN8ekSw__" alt="Product 4" fill className="object-cover" />
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/shop">
            <Button variant="link">View More</Button>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-12 bg-[#FFF9E5]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="relative w-full md:w-2/3 h-[400px] mb-8 md:mb-0">
            <Image src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4I56wno3QUZEW2WQCm7Ke8H5kafII5ycGnqT1T87j3nmLBN0YL8eOIwMKbJE4Jbl3cfr3XWIB0zxMAwsPvfuRNHCn7Xat-p6ed7T9ngogRlZOkK1-t8Q3zb59MMmQ--qMKCUIMek6VUIatoq4znUGv49Enpa09yYLXr1eZgxsVt3zLQ8UxIs7UGq1HKbimd3IP1l8LbzMHh7TahJu1thvfIMbm-oMm3lrFeN1js58AO38I-QRBsG4nexs40gOH0ncoUVh0v1ieqil7QcsKpnkY8dsaE5ZvmApRqZom1kdyH0s3qJnaP-NadkNbXQ6nwwoiMXcdWxa7eHKDTsE91Bg__" alt="Asgaard sofa" fill className="object-contain" />
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
            <h3 className="text-3xl font-bold mb-6">Asgaard sofa</h3>
            <Link href="/shop/asgaard-sofa">
              <Button variant="outline">Order Now</Button>
            </Link>
          </div>
        </div>
      </section>

 {/* Blog Section */}
 <section className="container mx-auto px-4 py-12 bg-[#FFFFFF]">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Blogs</h2>
        <p className="text-center text-gray-600 mb-12">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative w-full aspect-video mb-4">
            <Image src="https://s3-alpha-sig.figma.com/img/d161/c5f7/06433f2420891f403a591b053ab0ddfd?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RLqNezefhDm01RoO9JuodLZxCoQU9RWN0qvv15iP5pKBF~Qlpdh2r5HgSCeBGQ6zldaqK09ZTeMbdZsSceZp2h67hcF-WFz-OximfMa~ndm-OyG-FcOofkN9vU-Molv9b~8jePyC3UxfvCjVhnj6MmCyG~mnUJua70Qfk40iO3WHCypAnTKbQj2HGfn9HDj6AMCKhGDpv9-yver9CPGgbGI-cTX~b4xuZDRbA2FaMDRhWnKO7us7QVSgCqNWxcEcOm9LB2Bz-LOzrtoEZGh3YWBd5cGzqOgrZDySUy2hecfOr~9j327q3PwaSc6PBFn-RVeraFzC2oolho5JwBO4Sg__" alt="Blog Post 1" fill className="object-cover rounded-lg" />
            <h3 className="text-xl mb-4 hover:text-primary">Blog Post Title 1</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>5 min read</span>
              <span>Jan 20, 2025</span>
            </div>
          </div>
          <div className="relative w-full aspect-video mb-4">
            <Image src="https://s3-alpha-sig.figma.com/img/d424/06dc/2730568e294fb8ff45f6b0b0ce5dfec1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFm829dpBfaeAnbyAhkWzU6m6rVWUqIEafbGjKwMhQ872mDAG0GhbFv4a0sjtkEXlYcuOgBNQoXVTlCgdHxKMbPpXF9TtgeLuvxrOsC20~mn1EETVzpmh2gnTnVAYo6zwomvUpvjL5tGbOyU3H7wmeg7qCjRTCVpWv9pHKup1Ee2fDp4eyZd44fGEMWIHDszNCE0xWtJUjYW1Fe3mEb3X7rr1gx~~fpNgbsy~wuTjproKpC9wHdSdUZXnkqU6xezKaOToDleoVFH-iXPdlOlrsGNN6FAvyZEPukhZwjFmRsjXYGYLm0aJiikF6yO~PXmivp5yXExhiyTWgvBx1~EBA__" alt="Blog Post 2" fill className="object-cover rounded-lg" />
            <h3 className="text-xl mb-4 hover:text-primary">Blog Post Title 2</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>8 min read</span>
              <span>Feb 10, 2025</span>
            </div>
          </div>
          <div className="relative w-full aspect-video mb-4">
            <Image src="https://s3-alpha-sig.figma.com/img/21ad/18b9/74d9976eaa2789b598b2896a0149302a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BjNa~dP9KeN5shlVuottlmYUfL~fVBLPF5DCXAw17D7Ozzl~Tf8hag9mniJZtSR9wUKi0IQMbJIt7~HhnWhm-5aCSpNttpMn4HW-V5c7rPtGMoiXjEloiWmEb~-G7HXbUNCfIYpGpAUqe4PLTmCW8WcWWRGl3znX2Edzhg9TpsgEbxE36ZhOig4CXbQqsFMTr~tClSqofpOb~ctIGqErKQ5Z~ZEsUoZvJ3ZQGeeQdiNnjl-nPmr0mZ0YsczwOSU0~xEpZJ7dEdDg~~DfD~XoMi0nCR8PupxkMDLv2xWss1JhfBQj-BRt8UwHlr8yUZCto9U~S9xIRcXZbR3823QlYA__" alt="Blog Post 3" fill className="object-cover rounded-lg" />
            <h3 className="text-xl mb-4 hover:text-primary">Blog Post Title 3</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>6 min read</span>
              <span>Mar 05, 2025</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/blog">
            <Button variant="link">View All Posts</Button>
          </Link>
        </div>
      </section>


      {/* Instagram Section */}
      <section className="container mx-auto px-4 py-12 bg-[#FAF4F480]">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Instagram</h2>
        <p className="text-center mb-8">Follow our store on Instagram</p>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="mx-auto block">
            Follow Us
          </Button>
        </Link>
      </section>

      <Features />
      <Footer />
    </div>
  )
}

