import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

export function Projets() {
    return (
        <Carousel className="relative pb-24 sm:pt-0">
            <CarouselContent className="flex">
                <CarouselItem className="flex-shrink-0 w-full h-[600px]">
                    <div className="w-full h-full">
                        <Image
                            src="/techrepair.png"
                            alt="Image 1"
                            width={800}
                            height={600}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="flex-shrink-0 w-full h-[600px]">
                    <div className="w-full h-full">
                        <Image
                            src="/azgarok.png"
                            alt="Image 1"
                            width={800}
                            height={600}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="flex-shrink-0 w-full h-[600px]">
                    <div className="w-full h-full">
                        <Image
                            src="/nosanimaux.png"
                            alt="Image 1"
                            width={800}
                            height={600}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem className="flex-shrink-0 w-full h-[600px]">
                    <div className="w-full h-full">
                        <Image
                            src="/sitevoyage.png"
                            alt="Image 3"
                            width={800}
                            height={600}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </CarouselItem>

            </CarouselContent>

            <CarouselPrevious />

            <CarouselNext />
        </Carousel>
    )
}
