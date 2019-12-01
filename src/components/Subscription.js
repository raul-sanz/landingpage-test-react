import React from "react";

export default function Subscription(){
  return(
    <div className="flex justify-center">
      <div className="w-full lg:w-2/3 text-center py-10">
        <p className="text-2lx">Sé de los primeros en acceder a informacion exclusiva sobre últimas colecciones y descuentos</p>
        <div className="flex justify-center flex-wrap px-16 lg:px-0">
          <div className="w-full lg:w-1/3  border-b border-b-2 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ingresa tu direccion de correo electronico" aria-label="Full name"/>
          </div>
          <div className="w-full lg:w-1/3">
          <button class="w-full  bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 hover:border-transparent ">
              <span className="quick">SUBSCRIBETE AL NEWSLETTER</span>
              <i className="pl-3 text-white fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <label>
          <input class="mr-2 leading-tight" type="checkbox"/>
          <span class="text-sm">
            He leído y acepto los términos y condiciones relativos al tratamiento de mis datos peronales. 
          </span>
        </label>
      </div>
    </div>
  )
} 