import Image from "next/image";
import Header from './components/Header';
import ProductSection from "./components/ProductSection";
import Hero from "./components/Hero";
import ClassicsSpotlight from "./components/ClassicsSpotlight";
import ShopAir from "./components/ShopAir";
import Featured from "./components/Featured";
import Trending from "./components/Trending";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
// import Slider from "react-slick";




export default function Home() {
  return (
    <div className="">
    <section  className=" z-10  fixed w-full ">
    <Header />
    </section>
    <section className="pt-20">
    <Hero></Hero>
    <ShopAir></ShopAir>
    <Featured></Featured>
    <Trending></Trending>
    <ProductSection></ProductSection>
    <ClassicsSpotlight></ClassicsSpotlight>
    <Benefits></Benefits>
    <Footer></Footer>
    </section>
  
  </div>
  );
}
