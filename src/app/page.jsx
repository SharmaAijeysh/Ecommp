'use client';

import CarousalHome from "./components/CarousalHome/page";
import Categories from "./components/Categories/page";
import Maxpro from "./components/Maxpro/page";
import NavDownLinks from "./components/Navbar/NavDownLinks/page";
import Options from "./components/Options/page";



export default function Home() {



  return (
    <main className="flex flex-col">
      <NavDownLinks/>
      <CarousalHome/>
      <Categories/>
      <Options />
      <Maxpro /> 
    </main>
  )
}