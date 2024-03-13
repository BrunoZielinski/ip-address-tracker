import { headers } from 'next/headers'

import { Search } from './_components/search'
import { getUserIp } from '@/actions/location'

export default async function Page() {
  const header = headers()
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

  const userIp = await getUserIp()

  console.log(ip)

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div
        className="bg-cover bg-center w-full px-4 flex items-center justify-center flex-col py-8 gap-4"
        style={{
          backgroundImage: 'url(/pattern-bg.png)',
        }}
      >
        <h1 className="text-center font-medium text-white [font-size:_clamp(1.5rem,5vw,2rem)]">
          IP Address Tracker
        </h1>

        <Search />

        <p>{ip}</p>
      </div>
    </main>
  )
}
