import React from "react";

export default function LamparasBanner({img}){
  return(
    <div className="bg-local flex justify-center lg:justify-end banner-img" style={{backgroundImage: `url(${img})`}} >
      <div className=" flex">
        <div className="self-center text-center lg:pr-64">
          <h2 className="text-5xl text-white mb-10 noto">Lamparas</h2>
          <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
            <span className="quick">Ver Mas</span>
            <i className="pl-3 text-white fas fa-chevron-right"></i>
          </button>
        </div> 

      </div>
    </div>
  )
} 