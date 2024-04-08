import { useEffect } from "react"
import { useMap } from "react-leaflet"

function ChangeView({ center }) {
  const map = useMap()

  useEffect(() => {
    map.setView(center)
  }, [center, map])

  return null
}

export default ChangeView
