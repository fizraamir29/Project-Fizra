export interface Product {
  id: string
  name: string
  price: number
  description: string
  longDescription: string
  rating: number
  reviews: number
  sku: string
  category: string
  tags: string[]
  sizes: string[]
  colors: string[]
  images: string[]
  specifications: {
    dimensions: string
    weight: string
    materials: string[]
    warranty: string
  }
}

export const products: Product[] = [
  {
    id: "asgaard-sofa",
    name: "Asgaard Sofa",
    price: 250000.0,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    longDescription:
      "Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
    rating: 4.5,
    reviews: 5,
    sku: "SS001",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
    sizes: ["S", "XL", "XS"],
    colors: ["#9B8DFF", "#1D1D1D", "#B88E2F"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      dimensions: "35 × 35 × 35 in",
      weight: "7 pounds",
      materials: ["Wood", "Fabric", "Metal"],
      warranty: "12 Months",
    },
  },
  // Add more products here...
]

