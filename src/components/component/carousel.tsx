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
                  alt="Item 1"
                  className="w-full h-custom-height"
                  height="200"
                  src="/banner.png"
                  width="200"
                />
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>

              
                <img
                  alt="Item 2"
                  className="w-full h-custom-height"
                  height="200"
                  src="/banner.png"
                  width="200"
                />
              
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>
              
                <img
                  alt="Item 3"
                  className="w-full h-custom-height"
                  height="200"
                  src="/banner.png"
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
