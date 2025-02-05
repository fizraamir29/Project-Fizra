"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative w-20 h-20 border-2",
              selectedImage === index ? "border-black" : "border-transparent",
            )}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image || "/Sofa.png"}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="relative flex-1 aspect-square">
        <Image src={images[selectedImage] || "/Sofa.png"} alt="Product image" fill className="object-cover" />
      </div>
    </div>
  )
}

