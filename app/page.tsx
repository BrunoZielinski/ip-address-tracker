import { getLoc } from '@/actions/location'
import { Client } from './_components/client'

export default async function Page() {
  const location = await getLoc()

  if (!location)
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="animate-spin size-10 text-black"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 1 1-6.219-8.56"
          />
        </svg>
      </main>
    )

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Client initialData={location} />
    </main>
  )
}
