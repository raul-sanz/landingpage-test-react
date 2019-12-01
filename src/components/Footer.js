import React from 'react'
import Lock from "../assets/lock.png";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center bg-black">
      <div className="w-3/4 lg:block hidden" >
        <div className="flex text-white border-b border-white py-5">
          <div className="w-1/4">
            <p className="text-2xl">Compañia</p>
            <a href={''} className="no-underline "> Acerca de nosotros</a>
            <br/>
            <a href={''} className="no-underline "> Blog</a>
          </div>
          <div className="w-1/4">
            <p className="text-2xl">Contacto</p>
            <a href={''} className="no-underline "> Localizador de Tienda</a>
          </div>
          <div className="w-1/4">
            <p className="text-2xl">Siguenos</p>
            <button class="bg-white text-black hover:bg-gray-700 font-bold py-2 px-4 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button class="bg-white text-black hover:bg-gray-700 font-bold py-2 px-4 rounded-full">
              <i class="fab fa-instagram"></i>
            </button>
            <button class="bg-white text-black hover:bg-gray-700 font-bold py-2 px-4 rounded-full">
              <i class="fab fa-pinterest-p"></i>
            </button>
          </div>
          <div className="w-1/4">
            <p className="text-2xl">Politicas y Terminos</p>
            <a href={''} className="no-underline "> Localizador de Tienda</a>
          </div>
        </div>
        <div className="flex text-white  pt-3 pb-5">
          <div className="w-4/5">
            <p>Copyright &copy; Sincrology | Todos los derechos reservados</p>
          </div>
          <div className="w-1/5">
            <img src={Lock} alt=""/>
          </div>
        </div>
      </div> 

      <div className="w-full flex flex-wrap p-5 lg:hidden">
        <div className="w-full p-10 text-white border-b border-white">
          <div className="text-center">
          <p className="text-2xl pb-3">Siguenos</p>
          </div>
            <div className="text-center">
            <button class="bg-white text-black hover:bg-gray-700 font-bold py-2 px-4 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button class="bg-white text-black hover:bg-gray-700 font-bold py-2 px-4 rounded-full">
              <i class="fab fa-instagram"></i>
            </button>
            <button class="bg-white text-black hover:bg-gray-700 font-bold py-2 px-4 rounded-full">
              <i class="fab fa-pinterest-p"></i>
            </button>
            </div>
            <div className="flex justify-center pt-5">
            <img src={Lock} alt=""/>
          </div>
        </div>
        <div className=" w-full text-white text-center">
            <p>Copyright &copy; Sincrology | Todos los derechos reservados</p>
          </div>
      </div>
    </footer>
  )
}