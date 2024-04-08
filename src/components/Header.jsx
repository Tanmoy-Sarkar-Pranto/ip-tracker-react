import React, { useState } from "react"
import "./Header.css"
import arrowIcon from "../assets/images/icon-arrow.svg"
import ShowInfo from "./ShowInfo"
import axios from "axios"

const Header = ({ setLocation }) => {
  const [ipAddress, setIpAddress] = useState(0)
  const [fullData, setFullData] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_S0wiVL45fYQ3Eg5ivNUQBkC3mM5ua&ipAddress=${ipAddress}`
    const response = await axios(url)
    const data = await response.data
    // console.log(data)
    setFullData({
      ip: data.ip,
      location: `${data.location.region},${data.location.country}`,
      timezone: `UTC${data.location.timezone}`,
      isp: data.isp,
    })
    setLocation({
      lat: data.location.lat,
      lng: data.location.lng,
    })
  }
  return (
    <header>
      <div className="w-screen h-[16rem] bg-image flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white mt-8">
          IP Address Tracker
        </h1>
        <form className="mt-6">
          <div className="flex ">
            <input
              type="text"
              className="h-[2rem] w-[13rem] outline-none rounded-l-lg px-6 py-1 text-sm p"
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button
              className="w-[2rem] h-[2.02rem] bg-zinc-800 hover:bg-neutral-400 focus:bg-neutral-400 outline-none rounded-r-lg flex justify-center items-center"
              onClick={handleSubmit}
            >
              <img src={arrowIcon} alt="arrow" className="w-[0.5rem]" />
            </button>
          </div>
        </form>
        <ShowInfo fullData={fullData} />
      </div>
    </header>
  )
}

export default Header
