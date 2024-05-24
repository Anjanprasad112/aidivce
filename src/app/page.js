
import CarouselComp from "./components/Carousel/CarouselComp";
import Hero from "./components/HeroSecton/Hero";
import NavbarComp from "./components/Navbar/NavbarComp";

export default function Home() {
  return (
   <div>
    <NavbarComp/>
    <CarouselComp/>
    <Hero/>
   </div>
  );
}
