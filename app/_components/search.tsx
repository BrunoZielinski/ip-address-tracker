'use client'

import { Dispatch, SetStateAction } from 'react'
import { ChevronRight, Loader2 } from 'lucide-react'

interface SearchProps {
  value: string
  isLoading: boolean
  handleSearch: () => void
  setValue: Dispatch<SetStateAction<string>>
}

export const Search = ({
  value,
  setValue,
  isLoading,
  handleSearch,
}: SearchProps) => {
  return (
    <div className="flex flex-1 w-full max-w-md">
      <input
        value={value}
        disabled={isLoading}
        onChange={e => setValue(e.target.value)}
        placeholder="Search for any IP address or domain"
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
        className="w-full bg-white px-5 py-3 rounded-l-2xl disabled:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
      />

      <button
        onClick={handleSearch}
        disabled={!value || isLoading}
        className="bg-gray-900 text-white px-5 py-3 rounded-r-2xl hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="size-5 text-white animate-spin" />
        ) : (
          <ChevronRight className="size-5 text-white" />
        )}
      </button>
    </div>
  )
}
