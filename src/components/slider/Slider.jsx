import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Container,
  ImagemCarrossel,
  DotsWrapper,
  Dot,
} from "./Slider.style";

import banner1 from "../../assets/Banner1.png";
import banner2 from "../../assets/Banner2.png";
import banner3 from "../../assets/Banner3.png";
import Mobile1 from "../../assets/Mobile1.png";
import Mobile2 from "../../assets/Mobile2.png";
import Mobile3 from "../../assets/Mobile3.png";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

const slides = [
  { desktop: banner1, mobile: Mobile1 },
  { desktop: banner2, mobile: Mobile2 },
  { desktop: banner3, mobile: Mobile3 },
];

const Slider = () => {
  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const isMobile = useMediaQuery("(max-width: 768px)");

  const slideCount = slides.length;

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <Container>
      <Carousel
        className="rounded-xl overflow-hidden"
        style={{ width: "100%", height: "80%" }}
        setApi={setApi}
        opts={{ loop: true }}
      >
        <CarouselContent style={{ height: "100%" }}>
          {slides.map((slide, index) => {
            const src = isMobile ? slide.mobile : slide.desktop;
            return (
              <CarouselItem
                key={index}
                className="flex items-center justify-center rounded-xl overflow-hidden"
              >
                <ImagemCarrossel
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <DotsWrapper>
          {Array.from({ length: slideCount }).map((_, i) => (
            <Dot
              key={i}
              $active={i === currentIndex}
              onClick={() => api && api.scrollTo(i)}
            />
          ))}
        </DotsWrapper>
      </Carousel>
    </Container>
  );
};

export default Slider;