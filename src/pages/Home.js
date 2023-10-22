import React from "react";
import Navbar from "../components/Header/Navbar";
import Jumbotron from "../components/Header/Jumbotron";
import Analytics from "../components/Analytics/Analytics";
import Course from "../components/course/Course";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";
import ProductHunt from "../components/Buttons/ProductHunt/ProductHunt";

import Heading from "../components/Heading/Heading";

export default function Home() {
  return (
    <div className="page_wrapper">
      <Navbar />
      <Jumbotron />
      <Analytics />
      <Course />
      <Team />

      <Heading
        text={"Discover Us on Product Hunt!"}
        clss={"text-center"}
        clss2={12}
      />
      <ProductHunt />
      <Footer />
    </div>
  );
}
