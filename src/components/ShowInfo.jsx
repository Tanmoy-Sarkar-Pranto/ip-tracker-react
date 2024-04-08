import React from "react"
import SingleInfo from "./SingleInfo"
import "./ShowInfo.css"

const ShowInfo = ({ fullData }) => {
  return (
    <div className=" flex flex-col mt-4  w-[15rem] items-center">
      <div className="bg-white w-[15rem] rounded-xl px-5 py-4 gap-y-2 flex flex-col md:justify-center md:items-center md:flex-row md:gap-x-12 md:w-[50rem] mid-screen">
        <SingleInfo
          title="ip address"
          info={fullData.ip || "192.212.174.101"}
        />
        <hr className="md:w-[0.01rem] md:h-[5rem] md:bg-neutral-400 md:border-dashed border-none" />
        <SingleInfo
          title="location"
          info={fullData.location || "Brooklyn, NY"}
        />
        <hr className="md:w-[0.01rem] md:h-[5rem] md:bg-neutral-400 md:border-dashed border-none" />
        <SingleInfo title="timezone" info={fullData.timezone || "UTC-05.00"} />
        <hr className="md:w-[0.01rem] md:h-[5rem] md:bg-neutral-400 md:border-dashed border-none" />
        <SingleInfo title="isp" info={fullData.isp || "SpaceX Starlink"} />
      </div>
    </div>
  )
}

export default ShowInfo
