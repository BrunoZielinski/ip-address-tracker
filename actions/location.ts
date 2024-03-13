'use server'

import { IpifyLocation } from '@/types'

export const getLoc = async (ip: string): Promise<IpifyLocation | null> => {
  if (
    ip.length < 7 ||
    ip.length > 15 ||
    !ip.includes('.') ||
    ip.includes(' ')
  ) {
    return null
  }

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${ip}`,
  )
  const data = await res.json()
  return data
}
