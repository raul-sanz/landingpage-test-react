import React from "react";
import Book1 from "../assets/book1.png";
import Book2 from "../assets/book2.png";
import Book3 from "../assets/book3.png";
import Book4 from "../assets/book4.png";
import Port from "../assets/port.png";
import Logo from "../assets/logo_si.png";

export default function MagazineDetails(){
  return(
    <div className="flex w-full justify-center">
      <div className="w-full lg:w-4/5 flex flex-wrap pb-10">

        <div className="hidden lg:flex pt-10 w-full">
          <div className="w-1/4 px-3">
            <img src={Book1} alt=""/>
          </div>
          <div className="w-1/4 px-3">
            <img src={Book2} alt=""/>
          </div>
          <div className="w-1/4 px-3">
            <img src={Book3} alt=""/>
          </div>
          <div className="w-1/4 px-3">
            <img src={Book4} alt=""/>
          </div>
        </div>

        <div className="flex lg:hidden w-full pt-10">
          <div className="w-1/5">
            <div className="flex justify-center h-full bg-gray-100 hover:bg-white">
              <div className="self-center">
              <i className="text-6xl text-gray-500 fas fa-chevron-left"></i>
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <img src={Book3} alt="" width="100%"/>
          </div>
          <div className="w-1/5">
            <div className="flex justify-center h-full bg-gray-100 hover:bg-white">
              <div className="self-center">
              <i className="text-6xl text-gray-500 fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap pt-10 w-full px-5 lg:px-0">
          <div className="w-full lg:w-1/2">
            <img src={Port} alt="" width="100%"/>
          </div>
          <div className="w-full lg:w-1/2 pt-5 px-5 lg:px-16">
            <img src={Logo} alt=""/>
            <p className="text-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae distinctio maiores natus ratione fuga rerum eum provident saepe, veritatis hic quis soluta facere aliquam accusamus aut ex quo id!
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae distinctio maiores natus ratione fuga rerum eum provident saepe, veritatis hic quis soluta facere aliquam accusamus aut ex quo id!
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae distinctio maiores natus ratione fuga rerum eum provident saepe, veritatis hic quis soluta facere aliquam accusamus aut ex quo id!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 