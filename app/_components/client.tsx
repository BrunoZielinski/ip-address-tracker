'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

import { Info } from './info'
import { Search } from './search'
import { IpifyLocation } from '@/types'
import { getLoc } from '@/actions/location'

const Map = dynamic(() => import('./map'), { ssr: false })

interface ClientProps {
  initialData: IpifyLocation
}

export const Client = ({ initialData: location }: ClientProps) => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState<IpifyLocation | null>(location)

  const handleSearch = async () => {
    setIsLoading(true)
    const res = await getLoc(value)
    setData(res)
    setIsLoading(false)
  }

  return (
    <>
      <div
        className="bg-cover bg-center w-full px-4 flex items-center justify-center flex-col pt-8 pb-16 gap-8"
        style={{
          backgroundImage: 'url(/pattern-bg.png)',
        }}
      >
        <h1 className="text-center leading-tight font-medium text-white [font-size:_clamp(1.5rem,5vw,2rem)]">
          IP Address Tracker
        </h1>

        <Search
          value={value}
          setValue={setValue}
          isLoading={isLoading}
          handleSearch={handleSearch}
        />

        <Info data={data} />
      </div>

      <Map lat={data?.location.lat ?? 0} lng={data?.location.lng ?? 0} />
    </>
  )
}
