import React from 'react'
import Book from "../assets/book.png";

export default function Magazine({img}){
  return(
    <div>
      <div className="hidden lg:flex py-10 justify-center bg-local banner-img" style={{backgroundImage: `url(${img})`}}>
        <div className="w-2/3 flex flex-wrap">
          <div className="w-full lg:w-1/2 pt-16">
            <p className="text-3xl text-center text-white noto"> Estilo </p>
            <p className="text-6xl text-center text-white noto"> Escandinavo </p>
            <div className="lg:inline-block  w-full pt-10 px-24">
              <button class="block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
                <span className="quick">Decargar</span>
                <i className="pl-3 text-white fas fa-chevron-right"></i>
              </button>
              <button class="block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
                <span className="quick">Comparar</span>
                <i className="pl-3 text-white fas fa-chevron-right"></i>
              </button>
              <button class="block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
                <span className="quick">Comprar por ambiente</span>
                <i className="pl-3 text-white fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className=" bg-local" style={{backgroundImage: `url(${Book})`,height:'100%'}}></div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-center py-5 bg-local  " style={{backgroundImage: `url(${img})`}}>
        <div className="flex justify-center">
          <div className="w-4/5 md:w-full pt-5">
            <p className="text-3xl text-center text-white noto"> Estilo </p>
            <p className="text-5xl md:text-6xl text-center text-white mb-10 noto"> Escandinavo </p>
            
            
            <img src={Book} alt="" />
            
            <div className="lg:inline-block  w-full pt-10 ">
              <button class="block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
                <span className="quick">Decargar</span>
                <i className="pl-3 text-white fas fa-chevron-right"></i>
              </button>
              <button class="block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
                <span className="quick">Comparar</span>
                <i className="pl-3 text-white fas fa-chevron-right"></i>
              </button>
              <button class="block w-full mb-10 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
                <span className="quick">Comprar por ambiente</span>
                <i className="pl-3 text-white fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}