import { IpifyLocation } from '@/types'

interface InfoProps {
  data: IpifyLocation | null
}

export const Info = ({ data }: InfoProps) => {
  if (!data) return null

  const infos = [
    {
      title: 'IP ADDRESS',
      value: data.ip,
    },
    {
      title: 'LOCATION',
      value: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
    },
    {
      title: 'TIMEZONE',
      value: `UTC ${data.location.timezone}`,
    },
    {
      title: 'ISP',
      value: data.isp,
    },
  ]

  return (
    <div className="bg-white p-6 rounded-3xl grid sm:grid-cols-2 md:grid-cols-4 gap-4 -mb-56 sm:-mb-32 z-[999999] max-w-[70rem] shadow-md">
      {infos.map((info, i) => {
        return (
          <div
            key={i}
            data-last={i === infos.length - 1}
            className="space-y-2 md:border-r-2 border-black/5 md:data-[last=true]:border-transparent md:pr-6 md:data-[last=true]:pr-0"
          >
            <h2 className="text-gray-600 text-sm">{info.title}</h2>
            <p className="text-lg font-medium">{info.value}</p>
          </div>
        )
      })}
    </div>
  )
}
