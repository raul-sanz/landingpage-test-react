import React from 'react'
import Sofa from "../assets/sofa.jpg";
import Silla from "../assets/silla-1.png";
import Sofa1 from "../assets/sofa-1.png";
import Lampara1 from "../assets/lampara-1.png";
import Almuada from "../assets/almuada-1.png";

export default function Galery(){
  return(
    <div className="flex justify-center py-16 bg-gray-300">
      <div className="md:w-2/3 flex flex-wrap">
        <div className="w-full lg:w-1/2 px-2">
          <div className="flex  sofa-imgs bg-local" style={{backgroundImage: `url(${Sofa})`}}>
            <div className="self-end p-5">
              <h2 className="text-5xl text-white mb-2 noto">Ambientes</h2>
              <button class="bg-transparent text-white font-semibold hover:text-black py-2 px-4 hover:border-white-500 ">
                <span className="quick">Ver Mas</span>
                <i className="pl-3 text-white fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-2 py-5 lg:py-0">
          <div className="sofa-imgs flex flex-wrap">
            <div className="w-1/2 p-2 ">
              <div className="bg-local" style={{backgroundImage: `url(${Silla})`,height:'100%'}}></div>
            </div>
            <div className="w-1/2 p-2 ">
              <div className=" bg-local" style={{backgroundImage: `url(${Sofa1})`,height:'100%'}}></div>
            </div>
            <div className="w-1/2 p-2 ">
              <div className=" bg-local" style={{backgroundImage: `url(${Lampara1})`,height:'100%'}}></div>
            </div>
            <div className="w-1/2 p-2 ">
              <div className="bg-local" style={{backgroundImage: `url(${Almuada})`,height:'100%'}}></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}