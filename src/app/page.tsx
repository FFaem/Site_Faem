import { Banner } from "@/components/component/banner";
import {Slider} from "@/components/component/carousel";
import { Menu } from "@/components/component/menu";




export default function Home() {
  return (
    <main>
        <Banner/>
        <Menu/>
        <Slider/>    
    </main>
  );
}
