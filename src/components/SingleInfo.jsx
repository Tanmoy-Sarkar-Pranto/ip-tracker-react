import React from "react"

const SingleInfo = ({ title, info }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="uppercase text-xs tracking-widest font-extralight">
        {title}
      </p>
      <p className="text-sm font-bold text-center">{info}</p>
    </div>
  )
}

export default SingleInfo
