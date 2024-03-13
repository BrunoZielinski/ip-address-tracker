'use server'

import { headers } from 'next/headers'

import { IpifyLocation } from '@/types'

export const getLoc = async (ip?: string): Promise<IpifyLocation | null> => {
  const header = headers()

  let ipAddr: string

  if (ip) {
    ipAddr = ip
  } else {
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    ipAddr = process.env.NODE_ENV === 'development' ? '189.103.154.118' : ip
  }

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${ipAddr}`,
  )
  const data = await res.json()
  return data
}
