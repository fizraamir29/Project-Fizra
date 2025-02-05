import Image from "next/image"
import { Grid, LayoutGrid, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Trenton modular sofa_3",
    price: "25,000.00",
    image: "https://s3-alpha-sig.figma.com/img/a924/52e0/58e39805d460c4c63cccc8a518ca116f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFKb~2Zx5dieEjKAdLhSc99uAEO3xFoe5~Mrp8eEDUzXuDcM8gZZB3DoCzqmBN-42teNAKA2IhlIjhs-gEx5fsUxMDvVpkABt0LPl8ng3Km3kStVNIcFyv1BPo-XgEDAanDMejZCmtRR-eROPmYBDqONAb6bAVGYTDSLbGZNXnssqcm0x4tM-C746xIRx5Q6RW5E1E1K4wcq5YYg1tZKERQ-IJceXYhQux4lP4Gow7o7jHkowxfMB-2aeQeVOb-U31GY3y08nwfxIL4wZHSQGj5brqt4b~1BudrqTc06T7P9pkesOyEGLPYqRHzO1qSL5OZJcynpIKwglGhbvBjNew__",
  },
  {
    id: 2,
    name: "Granite dining table with dining chair",
    price: "25,000.00",
    image: "https://s3-alpha-sig.figma.com/img/09aa/86df/8158c0cda86398a2874f37f49b06d90d?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp-wjMRvHhO33OpIApTCKdDJ2s7-wtQuGasW10shDx65k2BaOU-9T-5qqzw9yRqwDIqqZyc54ZiQFh1HkuJyfKaJlL0ezke1cCWD4lKYAvcl~Tf7J2gdeteW9~DkvqI9WjBPJzfw0GLcWDO7FYzN9kTg4dYEBUH6U2QD5kN21oN41GAJvCO3i8hBEMpya5z61VVR4ro4zQhn16MS2d8FbwdeE8-UlOtzH5jxhbClbrqJ8H6Sw4xXh9c6QCbL7ogt9TedAgeoUYNUC9ORy39-XNR4uS8DrvO1FxVwnoFpRHvySyAxspnZ938rapMO2VMvFqvNkIxjzqRG2Fxj3hWHA__",
  },
  {
    id: 3,
    name: "Outdoor bar table and stool",
    price: "25,000.00",
    image: "https://s3-alpha-sig.figma.com/img/8bbf/604a/28acd7f67bf1de57e6827bf4ce2ed796?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMd-0aRRdztUGrz~5NwaDT72lskQu~1ScjYGF2u6RrQ36RS1X~Sv8KgFk03H4-tBRYBW0t6S7~kHD4spYWHvHRFUTFtzFmm1jGv5rhnfzjAFFpMpXgeS6gD0FwIiYAVjae~57gU2mQly4FWjk-qWuW6zkwLN6C~7PDzMkwZntP~UJN0~PK7BqiSRrHAOWPg1JY9ZSGE~C5WwsrziPc72~xYSurXMRvLTGTx0ekAxljEOQQJGJhM7UkGHCAAhs6Oymp7GjGjfBV4JHqhO39Vn1vRhvvIk0Bzcr6nhe~71qrqIIskBB~AaT1Y7THZLMvgINlJohRJuiQNS9~77RN3XOA__",
  },
  {
    id: 4,
    name: "Plain console with teak mirror",
    price: "25,000.00",
    image: "https://s3-alpha-sig.figma.com/img/1d3d/b619/021f20079d59c4e80115b2d0fd30e46f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRaATE9tMg4mLHtzLqwtrHLknVYsskYkXPYdWxsJgDvas6VpdMq3nETeXBJ4QuoqFgKlnqEh0fzDdhxkzQxpRvcRdbmsl9D5-RFuLCbRZiD21ntw0A7bK~hdLTFYQh11DdnBqm09oDb4d6HGVuuNLR3secjNNiDR5peXeJks2XUC8nSXHt~znIqwnDGkuUhMhWsgfowunYD3NVnPKaL4EtXRlzqgGkORDGocWJzOeY-iaXVPSuOIIdNi7ax937UfZnQT03N-7g3XHXBP80MMQP749GEpVFYe7UP4~sKXEKrlYaYj7onWndTOreAUaH1V1NHSSoqhXCk2mYddN8ekSw__",
  },
  {
    id: 5,
    name: "Grain coffee table",
    price: "15,000.00",
    image: "https://s3-alpha-sig.figma.com/img/f46a/6e57/9af2d8516ec53d1284c0628e97d2ea0a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kaUP6C1zb86eWbvSdO8ue7oMre7083MG0wjUSu4UJyE15HlovAwwkm~ynVBJ~yNgtpN3q5FOWJtBpdL7dBFfXV44IcT7lM1~cN3KUuLT6wMiRxm7WURbszHbUUNlfVW1RzE1ATSTdPcWXtD4dNnFn1e4vNRUf7ML-fArOxdU6shBoCdo5oF1ocboiLH-86Ny8p46EEV9fCQR2WfZcalT9T2YDv6lORoBh1C98L7wTe~C4FrjfUv20nDZUwiGAx23Fu-WBCzgq1hAnZtxdcyG1zSJYaIamdQi9ANeERW3~lefDi5IyOtejRupT-GkFWuczsLSOicloNeEiHlI2HiEUg__",
  },
  {
    id: 6,
    name: "Kent coffee table",
    price: "225,000.00",
    image: "https://s3-alpha-sig.figma.com/img/c3d7/1710/c6aed28ef27fb848794b8cc2feeeae80?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FwkiLMNi-3gUJzUxfsZ0DxcCNWjb2yqKcc8XmLdXPl8MHQajqmb7mG3PpzgXDOsfj6UILNjutfifWAhoV~IZzhbw836e5BMlW0qacZ6rMY23O9m5eND94kCRAWev-kUCQ40zPVcSXMht6LQ54gy~N8t4oigbH5yvLVJvl~zVpy1gX8by7r3IYS6DpP9mzmXoy5mr78LfXNX5okLycIDtWbs~uN2KoMOq9GJ3tDrlLeTFM9qtTfrYrmi9Dx-a29Fte18lgRmnrGNlAaAoRUhLj~ETQjI0by4ddVBM00-oqM4C8iVPmSkV3AZfMQ4acktNuEGCM3Uc0rbLaZbr-OAsHg__",
  },
  {
    id: 7,
    name: "Round coffee table_color",
    price: "251,000.00",
    image: "https://s3-alpha-sig.figma.com/img/fa33/5455/06eb54ab47d16829800ed53309100396?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JbdARXSCPaHqJybGk38mwabWBZLHcYrip6pXqWLnX~tqohfvOK1VPP91UGPUgVNSBv3RvRiesAbm7zjYI-oteDheq1i5Z2atLllA12nmwMsXLcnCNJUfaINCYm5LaYbdMTvFfTjszAOUiwWUmoiGgl9AUU~DnVg~LSWpyain5I3AHt7bhKMuwGTDt8PX0ao8dZFV6jguOLwdhvU8URlZ7kj7WVpMGpfcLWlwg2pCMRJ8lYXD2bLJvcgF3sZCBzyk~rnU0az8vFNKBGJsTC7QMMDTgMQx0OMrSvEe8bpa-eaTzXNBBjuC4xCHagoENsEHOejG2qGfy9dDZMTmovjc5Q__",
  },
  {
    id: 8,
    name: "Reclaimed teak coffee table",
    price: "25,200.00",
    image: "https://s3-alpha-sig.figma.com/img/9b96/c2d3/d3280b573b80f52420eef84a445eecb4?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=crl~By1Q0eq1ydnqGxbj9ydLwS-g~7PsJ34bGWLa9bRwV9Leuy1m1fadB-WoGZCBQ9Kd12CJp1-wY48JqROEXx0uV6yU6HEGeITz6X2037sg9X4zihowuF4pxASur6jJFSVMlXsmoq712NC-~Rd41W7LXxgVf2y-~hlJ5S2PjR3~EEK78g8O2WfVctgiKpzOeJ8B8aR~X8Fyzv85MlktgJ~WFDDb6AkzQjaiZ9rAGk8C1ILEqrgkZMKrAULFlGGvBQroodMDLvAFeNXf5rEoXYYaq-RjUHA4EEhaVEKyF~PApDnQjDOy9GofSeg6wUS1S-t64qDCaCZksGijrRhvsg__",
  },
  {
    id: 9,
    name: "Plain console_",
    price: "258,200.00",
    image: "https://s3-alpha-sig.figma.com/img/b826/8b85/e6cd03a29914aa82658e06f8ef5b5121?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MthctsgxAW48DVuPJyJBC3QMXmXLwtt~aHEmMAzMyz3ScxcrBhF6JNF8BwO5jtFsDcUivcu8~v0zyi~b87NMYNTzSMiHX5mCBkvxifZk3uB9oU~5JaHKUYbFMc12BXmszSodze-6gw9uTmLJJt~IlmTZghL2P7mgWlI~d3VOCQwiZPF2Use3QktAsaPsRo6q8QeO9LPf3x~ghujryhzkkiBI4D20F~4Qy-1C8nClZlvCWfIfd2HrJ0hhSEkyOtQglU0kDS-0hpx4NUESLXcEhxLT-bvmG83lxeCADDKWU3iI3Ew87sg1l~13LjgQvX2A2CzZI6N7CxAD4XKVcLxQgA__",
  },
  {
    id: 10,
    name: "Reclaimed teak Sideboard",
    price: "20,000.00",
    image: "https://s3-alpha-sig.figma.com/img/0319/9e8c/d3232a9af9f444c0046aa730992bdf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eqWe1c5amezwuDmg0oddl~7KhDYZwicnLkKb6fQ2kl17RIbnHKIARWLaUGBkjSmjXeTGniHtW-Cwd37M5T7rpCDbt8tThBNnxI7wjV0p~uqfhdlaCK0Xv-rT4ArzmgvkYn18S6l5B9x-6TE6SHOrTF-5KgKryiDBgtYdHh9WLSOqQRLsFLvVgW~plp0zB3hdIUXP3TqBDlImDJk6sE08u3qrjRJru6nitlIfAudOk94Bl8iO~Nr1O9SkmyH-uphK4c5lP7gd0OpIyBA-U4bb9hBXFTdFUkiuk4q4wVWT76d6TGsSoxbX8bg69HMro3Vk3qhc8Tgvm2JzKrdRFpO0~g__",
  },
  {
    id: 11,
    name: "SJP_0825",
    price: "200,000.00",
    image: "https://s3-alpha-sig.figma.com/img/752d/f0e7/5e14687d3d37cf25ae70c8fb18ee72ba?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fGGTOcghjjm9rlfxC3PbJ4gptprVrbjASP1JkqVJf8e4LMPUdvSsnhZpZj3xIR573L4ZZM0W7DHZUQZQU~d2jrGR9h28hbBCIm5eGi3BfJZMxmPQRZp6pRQgbrh9aBe7VXIAYM0UPdrvBG5QAtC1wsaCd~IxmNENGHcJMyyEKMtkYG8RqrAcK9pOt27gepiuC1SGnkS6rxT-hVqOQxrUwirJXt4kEtKi5K5mF-jt7bG8oU~RjP~j2XH6hFkKvBrBbROalDbShiUSjiQofTQeDPmg9~eHftqMy8uEAZ8PRgYjEIVySGUteISGyMgNL8WxA6WO578T01gZhWcVDeNBqA__",
  },
  {
    id: 12,
    name: "Bella chair and table",
    price: "100,000.00",
    image: "https://s3-alpha-sig.figma.com/img/3b10/d498/8ebb456066c061959f9330832c36374f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jhWDvzfaupZ9oE9R3COcBBB0OdcDA8zuRSjSefmpRr6YrJcz44PeAUc1h5x4wid8Sa3W2J0Sln2vgrKBBQ18p2JL3VknXdMLRS9K18AvtkAqGGvfIvJJVwcm5OUnZ3Jv8kmgqoawnNGCLb9pILMrAIKj2Nle932pwi-zrs6gs0KEVahS1d9GrSTrlQ~GjdG2BQXEWUkkC3iBohGUASpSSce~YTIfP-zsFrkJadMhIxSO5riEtqoYlARoQ6OHa5wF88l5tWEiImwE6mB~HCpEyIKc3zPMhdzrHgUsUID7S1eSklyv0qRo6JE-mZRie3PlHW4qv3r~SLfvM4g~Gd58Qg__",
  },
]

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#FFFF]">
      <Header />

      {/* Shop Header */}
      <div className="relative h-[240px] bg-[url('https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQPrH-LHXX0zenSKKpc-sLIci25MKO3puyNqtuDGzng-za0mXDnFK~fdrnRrE11Rr4bvNl6mDm~jJNVEG61IP-v5hgG6yUjvY8058T45TF4DFTT14kAwRn8yQ7BDcfCa88z8QPgDH8yKa~ISZcnw~zs1ajnNVRtP1NaUf47VtVxrLaPi0mTSld4s9pOdZmhcvJUAAqsMTVmccLu-2sBaAkTOmyTqahZgwFt97jKivFT2MNcojQ4hebN2PGEtHrdmSuq0nDd-Wq0ro5FIpGW1e2p5Kj4-0mdM03mBWxQpQL8KfeyIXKUnG~QTfT3rbVQcC3DHxifSrqXxW8K2JVyZPw__')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Shop</h1>
            <div className="flex items-center gap-2">
              <span>Home</span>
              <span>/</span>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600">Showing 1-16 of 32 results</span>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="16">
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="Show" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16">16</SelectItem>
                <SelectItem value="32">32</SelectItem>
                <SelectItem value="48">48</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="default">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover mb-4"
                />
                <h3 className="text-sm mb-2">{product.name}</h3>
                <p className="font-semibold">Rs. {product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <Button variant="outline" className="w-8 h-8 p-0">
            1
          </Button>
          <Button variant="outline" className="w-8 h-8 p-0">
            2
          </Button>
          <Button variant="outline" className="w-8 h-8 p-0">
            3
          </Button>
          <Button variant="outline" className="w-8 h-8 p-0">
            Next
          </Button>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  )
}

