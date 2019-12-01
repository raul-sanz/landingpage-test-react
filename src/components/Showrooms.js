import React from "react";

export default function Showrooms({img}){
  return(
    <div className="flex justify-center bg-local banner-img" style={{backgroundImage: `url(${img})`}}>
      <div className="flex w-full lg:w-2/3 h-full justify-center">
        <div className="flex flex-wrap self-end text-white px-5 lg:px-0">
          <div className="w-full text-center">
            <p className="text-big noto">SHOWROOMS</p>
          </div>
          <div className="block lg:flex  w-full pt-10 ">
            <button class="mr-4 block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
              <span className="quick">Altavista</span>
              <i className="pl-3 text-white fas fa-chevron-right"></i>
            </button>
            <button class="mr-4 block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
              <span className="quick">Interlomas</span>
              <i className="pl-3 text-white fas fa-chevron-right"></i>
            </button>
            <button class="mr-4 block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
              <span className="quick">Zavaleta</span>
              <i className="pl-3 text-white fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 