import React from 'react'
import Lamparas from "../assets/lamparas.jpg";
import Tapete from "../assets/silla-2.jpg";
import Sof from "../assets/sof.jpg";
import Black from "../assets/black.jpg";
import LamparasBanner from "./LamparasBanner";
import TapetesBanner from "./TapetesBanner";
import Galery from "./Galery";
import Magazine from "./Magazine";
import MagazineDetails from "./MagazineDetails";
import Trends from "./Trends";
import Showrooms from "./Showrooms";
import Subscription from "./Subscription";

export default function Page() {
  return (
    <div>
      
      <LamparasBanner img={Lamparas}/>

      <TapetesBanner img={Tapete}/>

      <Galery/>
    
      <Magazine img={Black}/>

      <MagazineDetails/>

      <Trends/>

      <Showrooms img={Sof} />

      <Subscription />

    </div>
  )
}
