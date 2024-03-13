'use client'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { Map as MapL } from 'leaflet'
import { useEffect, useRef } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

interface MapProps {
  lat: number
  lng: number
}

const Map = ({ lat, lng }: MapProps) => {
  const ref = useRef<MapL>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.setView([lat, lng], 13)
    }
  }, [lat, lng])

  return (
    <div className="w-full flex-1 flex flex-col relative min-h-[26rem]">
      <MapContainer
        zoom={13}
        ref={ref}
        center={[lat, lng]}
        className="size-full flex-1"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]} />
      </MapContainer>
    </div>
  )
}

export default Map
