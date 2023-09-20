import React, { useState, useEffect } from "react"

import { FiImage } from "react-icons/fi"

import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai"

const SearchItem = ({ searchData }) => {
  return (
    <div className="searchItem border bg-blue-500 text-white  my-1 p-1 rounded-md md:text-sm text-[8px] cursor-pointer ">
      <a
        href={`#${searchData.id}`}
        className="flex flex-row gap-3 max-w-[130%] items-center justify-between"
      >
        {" "}
        {/* switch src with title */}
        <span className="whitespace-nowrap">{searchData.title}</span>
        <span className="">
          <img
            src={searchData.src}
            alt="search img"
            className="aspect-video w-16"
          />
        </span>{" "}
      </a>
    </div>
  )
}

function NavBar({ data }) {
  // const [seachQuery ,setSearchQuery]= useState('')

  const images = data

  const [searchedImages, setSearchedImages] = useState([""])
  const [searching, setSearching] = useState(false)

  const [q, setQ] = useState("")

  const SearchFunction = (q) => {
    setQ(q)
    let newArray
    if (q.length < 1) {
      setSearchedImages([])
      setSearching(false)
    } else {
      newArray = images.filter((el) => {
        setSearching(true)
        const idMatch = String(el.id).slice(0, q.length) === q
        const titleMatch =
          el?.title.split(" ").join("").toLowerCase().slice(0, q.length) ===
          q.split(" ").join("").toLowerCase()

        // Include the image in the newArray if either idMatch or titleMatch is true
        return idMatch || titleMatch
      })
      setSearchedImages(newArray)
    }
  }

  useEffect(() => {
    console.log(images)
  }, [images])

  return (
    <nav className="h-[80px] w-[100vw] flex items-center justify-between absolute top-0 left-0  z-[1000] px-2 lg:px-16  md:px-10 ">
      <div className=" flex w-fit h-[50px] justify-between items-center cursor-pointer scale-75 md:scale-100">
        <FiImage size={40} />
        <p className="font-bold md:text-[24px] text-xs leading-none text-black ml-1 md:ml-2">
          gallery
        </p>
      </div>
      <div className=" w-fit relative">
        <div className="app__navbar-search lg:w-[525px] w-[250px] md:w-[400px] md:h-[36px]   h-7 rounded-md border-2 border-gray-300 flex items-center justify-between p-[10px] scale-75 md:scale-100 hover:border-red-300">
          <input
            type="text"
            placeholder="What do you want to see?"
            className=" bg-transparent min-w-[70%]  border-none outline-none text-xs md:text-base"
            value={q}
            onChange={(e) => {
              SearchFunction(e.target.value)
            }}
          />
          <AiOutlineSearch
            size={22}
            color="#D1D5DB"
            // onClick={() => {
            //   SearchFunction(q)
            // }}
          />
        </div>
        {searching && (
          <ul className="app__navbar-searchresult absolute lg:top-[3rem] md:top-[2.5rem] top-[2rem] left-[50%] translate-x-[-50%] ">
            {searchedImages?.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setSearchedImages([])
                  setQ("")
                }}
              >
                {" "}
                <SearchItem searchData={item} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="app__navbar-menu flex lg:w-[114px] gap-1 w-fit h-[36px] cursor-pointer justify-between items-center scale-75 md:scale-100">
        <p className="font-bold text-[16px] leading-[24px] text-white my-auto md:flex hidden ">
          Sign In
        </p>
        <AiOutlineMenu size={30} />
      </div>
    </nav>
  )
}

export default NavBar
