import { Banner } from "@/components/component/banner";
import {Slider} from "@/components/component/carousel";
import { Menu } from "@/components/component/menu";
import Jobs  from "@/components/component/jobs";


import "./custom-styles.css";
import { Subscribe } from "@/components/component/subscribe";




export default function Home() {
  return (
    <main className="bg-medium dark:bg-dark">
        <Menu/>
        <Slider/>
        <Jobs/>
        <Subscribe/>

    </main>
  );
}
