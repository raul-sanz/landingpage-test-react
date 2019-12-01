import React from "react";
import Loft from "../assets/loft.png";

export default function Trends(){
  return(
    <div className="flex w-full justify-center bg-black">
      <div className="flex lg:flex-row-reverse flex-wrap  w-full lg:w-3/4 lg:py-10">
        <div className="w-full lg:w-1/2">
          <img src={Loft} alt="" width="100%"/>
        </div>
        <div className="w-full lg:w-1/2 text-white p-16 lg:p-0">
          <p className="text-4xl noto">Nuevas tendencias en diseños de espacios colaborativos para 2020</p>
          <p className="text-2xl pt-5 quick">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi libero nostrum maxime alias, consectetur laboriosam voluptatem. Dolorem nulla labore at iste voluptate? Error quo ipsum eos eveniet repellat voluptates dolorum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <div className="flex w-full justify-center lg:justify-end pt-5 pr-5">
            <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
              <span className="quick">Seguir leyendo</span>
              <i className="pl-3 text-white fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
} 