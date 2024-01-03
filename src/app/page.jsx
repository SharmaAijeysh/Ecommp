import CarouselDefault from "./components/CarouselDefault/page";
import FLexOptionsList from "./components/FLexOptionsList/page";
import FlexOptions from "./components/FlexOptions/page";
import Maxpro from "./components/Maxpro/page";
import Minipro from "./components/Minipro/page";
import Options from "./components/Options/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CarouselDefault/>
      <FLexOptionsList/>
      <FlexOptions/>
      <Options/>
      <Maxpro/>
      <Minipro/>
    </main>
  )
}