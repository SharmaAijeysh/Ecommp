'use client';

import Banner from "./components/Banner/page";
import FLexOptionsList from "./components/FLexOptionsList/page";
import FlexOptions from "./components/FlexOptions/page";
import Maxpro from "./components/Maxpro/page";
import NavDownLinks from "./components/Navbar/NavDownLinks/page";
import Options from "./components/Options/page";



export default function Home() {



  return (
    <main className="flex flex-col">
      <NavDownLinks/>
      <FLexOptionsList />
      <FlexOptions />
      <Banner />
      <Options />
      <Maxpro /> 
    </main>
  )
}