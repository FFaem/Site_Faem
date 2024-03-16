"use client"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export function Slider() {
  return (
    <Carousel key="1" className="absolute w-100 h-1 mx-auto">
      <CarouselContent>
        <CarouselItem>
          <div className="">
            <Card>
              <img
                  alt="Item Mobile"
                  className="hidden sm:block w-full h-auto"
                  src="/banner.png"
                  height="200"
                  width="200"
              />

              {/* Imagem para tablets e desktops */}
              <img
                  alt="Item Desktop"
                  className="block sm:hidden w-full h-auto"
                  src="/banner-moblie.png"
                  height="200"
                  width="200"
              />
              
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>

              
            <img
                  alt="Item Mobile"
                  className="hidden sm:block w-full h-auto"
                  src="/banner.png"
                  height="200"
                  width="200"
              />

              {/* Imagem para tablets e desktops */}
              <img
                  alt="Item Desktop"
                  className="block sm:hidden w-full h-auto"
                  src="/banner-moblie.png"
                  height="200"
                  width="200"
              />
              
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>
              
                 <img
                  alt="Item Mobile"
                  className="hidden sm:block w-full h-auto"
                  src="/banner.png"
                  height="200"
                  width="200"
              />

              {/* Imagem para tablets e desktops */}
              <img
                  alt="Item Desktop"
                  className="block sm:hidden w-full h-auto"
                  src="/banner-moblie.png"
                  height="200"
                  width="200"
              />
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <div />
    </Carousel>

  )
}
