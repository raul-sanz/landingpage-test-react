import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-3/4  bg-transparent p-5 fixed" >
        <nav className="flex w-full flex-wrap bg-transparent pb-3 border-b border-white lg:hidden">
          <div className="w-1/5 pl-3 pt-2">
             
            <button className="flex self-center items-center px-3 py-2 text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <i class="text-3xl fas fa-bars"></i>
            </button>
          </div>
          <div className="w-3/5 text-center text-white">
            <p className="text-3xl">Logotipo</p>
          </div>
          <div className="w-1/5 text-white text-2xl text-center pt-2">
          <i className="far fa-user"></i> <i className="pl-3 fas fa-shopping-cart"></i>
          </div>
        </nav>

        <div className="lg:flex-wrap hidden lg:flex">
          <nav className="flex w-full flex-wrap bg-transparent pb-3 border-b border-white">
            <div className="w-4/5 text-white">
              <p className="text-3xl inline-block pr-4">LOGOTIPO</p>
              <ul className="inline-block text-1xl">
                <li className="inline-block pr-4"> <a href={''} className="no-underline">Comprar por ambientes</a></li>
                <li className="inline-block pr-4"> <a href={''} className="no-underline">Sucursales</a></li>
                <li className="inline-block"> <a href={''} className="no-underline">Loyalty Program</a></li>
              </ul>
            </div>
            <div className="w-1/5 flex justify-end text-2xl text-white pt-2">
            <i className="far fa-user"></i> <i className="pl-3 fas fa-shopping-cart"></i>
            </div>
          </nav>
          <div className="w-full">
            <ul className="inline-block text-white text-1xl">
              <li className="inline-block pr-4"> <a href={''} className="no-underline">Sala</a></li>
              <li className="inline-block pr-4"> <a href={''} className="no-underline">Comedor</a></li>
              <li className="inline-block pr-4"> <a href={''} className="no-underline">Recamara</a></li>
              <li className="inline-block pr-4"> <a href={''} className="no-underline">Tapetes</a></li>
              <li className="inline-block"> <a href={''} className="no-underline">Exterios</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
