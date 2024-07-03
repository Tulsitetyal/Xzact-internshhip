import React from "react";
import Categorysection from "@/components/cards/Categorysection";
import Headertop from "../components/headers/Headertop";
import Headermiddle from "../components/headers/Headermiddle";
import Footer from "../components/Footer";
import Headerbottom from "@/components/headers/Headerbottom";
import BlueberriesImageSection from "../components/Imagecomponent/Blueberriesimagesection";
import Productsectionone from "@/components/cards/Productsectionone";
import Productsectiontwo from "@/components/cards/Productsectiontwo";
import Productsectionthree from "@/components/cards/Productsectionthree";
import Cherriesimagesection from "@/components/Imagecomponent/Cherriesimagesection";
import Dealofday from "@/components/Dealofday";
import Newdeals from "@/components/Newdeals";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Headertop />
      <Headermiddle />
      <Headerbottom />
      <div className="py-10">
        <BlueberriesImageSection />
        <Categorysection />
        <Dealofday />
        <Productsectionone />
        <Cherriesimagesection />
        <br />
        <Newdeals/>
        <Productsectiontwo />
        <br />
        <Productsectionthree />
      </div>
      <Footer />
      <Copyright/>
    </div>
  );
}
