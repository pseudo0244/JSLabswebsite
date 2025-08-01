"use client"

import { useState } from "react"
import { Camera, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Placeholder images - replace with actual lab photos
  const galleryImages = [
   
    {
      id: 2,
      src: "https://res.cloudinary.com/dyvtcfxcl/image/upload/v1754035744/Screenshot_2025-08-01_at_13.37.12_jyxbak.png",
      alt: "Laboratory equipment",
      title: "Advanced Medical Equipment",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dyvtcfxcl/image/upload/v1754035744/Screenshot_2025-08-01_at_13.37.21_adoz86.png",
      alt: "Clean waiting area",
      title: "Comfortable Waiting Area",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dyvtcfxcl/image/upload/v1754035745/Screenshot_2025-08-01_at_13.37.42_d9ghtk.png",
      alt: "Blood collection area",
      title: "Sample Collection Room",
    },
    
    
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Take a Look at our Packages</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our modern facilities, advanced equipment, and comfortable environment designed for your healthcare
            needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden flex items-center justify-center bg-gray-100 min-h-[200px]">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground">Visit us to experience our world-class facilities in person</p>
        </div>
        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-black/90 border-0">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Gallery image"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default Gallery
