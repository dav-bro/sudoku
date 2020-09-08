import React from "react"
import Parallax from "./parallax"

const Header = () => {


  return(
    <div  className="fixed flex w-full top-0 h-20  flex-row justify-center bg-gray-800  items-center border-0   z-20 " >
      <p className="text-2xl p-6  text-white hover:bg-gray-900 flex items-center cursor-pointer h-full" >home</p>
      <p className="text-2xl p-6 text-white hover:bg-gray-900 flex items-center cursor-pointer h-full" >about</p>
    </div>
  )
}

export default Header;

