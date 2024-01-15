'use client';
import CarousalHome from "./components/CarousalHome/page";
import Categories from "./components/Categories/page";
import Maxpro from "./components/Maxpro/page";



export default function Home() {



  return (
    <main className="flex flex-col">
      <CarousalHome/>
      <Categories/>
      <Maxpro /> 
    </main>
  )
}