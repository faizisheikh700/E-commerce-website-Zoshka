"use client"
import React from "react";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Secondbar from "@/Components/Secondbar";
import Subfooter from "@/Components/Subfooter";
import Footer from "@/Components/Footer";
import Category from "@/Components/Category";
import Review from "@/Components/Review";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Secondbar />
      <Hero />
      <Category />
      <Review />
      <Subfooter />
      <Footer />
    </div>
  );
}
