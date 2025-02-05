import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Hero Section - Keeping the existing banner */}
      <div className="relative h-[240px] bg-[url('https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQPrH-LHXX0zenSKKpc-sLIci25MKO3puyNqtuDGzng-za0mXDnFK~fdrnRrE11Rr4bvNl6mDm~jJNVEG61IP-v5hgG6yUjvY8058T45TF4DFTT14kAwRn8yQ7BDcfCa88z8QPgDH8yKa~ISZcnw~zs1ajnNVRtP1NaUf47VtVxrLaPi0mTSld4s9pOdZmhcvJUAAqsMTVmccLu-2sBaAkTOmyTqahZgwFt97jKivFT2MNcojQ4hebN2PGEtHrdmSuq0nDd-Wq0ro5FIpGW1e2p5Kj4-0mdM03mBWxQpQL8KfeyIXKUnG~QTfT3rbVQcC3DHxifSrqXxW8K2JVyZPw__')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Welcome to Meubel House</h2>
            <p className="text-gray-600 mb-4">
              At Meubel House, we specialize in crafting exquisite furniture that merges aesthetics with functionality.
              Our carefully curated selection includes contemporary designs and timeless classics, ensuring that you find 
              the perfect piece to complement your home.
            </p>
            <p className="text-gray-600">
              Every piece we create is a testament to superior craftsmanship, built from high-quality materials that
              guarantee longevity and elegance.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image src="https://cdn.media.amplience.net/i/shadesoflight/furniture_1?fmt=auto&w=575https://cdn.media.amplience.net/i/shadesoflight/furniture_1?fmt=auto&w=575" alt="About Meubel House" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold">Quality Design</h3>
              <p className="text-gray-600">
                Our designs blend artistry and durability to create furniture that enhances your living space.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices, ensuring that our furniture is both stylish and eco-friendly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, and we strive to provide top-tier customer service and quality products.
              </p>
            </div>
          </div>
        </div>

           {/* Our Team Section */}
           <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team consists of passionate designers, skilled craftsmen, and customer service professionals who are
            dedicated to providing the best furniture and services for your home.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[{
              name: "Sophia Carter",
              role: "Lead Interior Designer",
              image: "https://media.istockphoto.com/id/1414162938/photo/call-center.jpg?s=612x612&w=0&k=20&c=nE7WRL_2QzjBaW4E9r0B90e1ruRpDq9UTB5elXL4ES0="
            }, {
              name: "Michael Thompson",
              role: "Furniture Engineer",
              image: "https://media.istockphoto.com/id/1322087869/photo/smiling-male-call-center-operator-with-headphones-sitting-at-modern-office-with-collegues-on.jpg?s=612x612&w=0&k=20&c=7IhQ_rOgTQ-qkt21v88Q1z37mFiJ0RFiEfT8k482jJQ="
            }, {
              name: "Emily Davis",
              role: "Customer Relations Specialist",
              image: "https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
            }, {
              name: "Daniel Roberts",
              role: "Production Manager",
              image: "https://t4.ftcdn.net/jpg/03/30/78/05/360_F_330780507_THpeN7e0rMiDgot1VrPBopyaIbmWVHho.jpg"
            }].map((member, index) => (
              <div key={index} className="space-y-4">
                <div className="relative h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  );
}