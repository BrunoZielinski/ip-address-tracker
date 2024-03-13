'use client'

export const Search = () => {
  return (
    <div className="flex flex-1 w-full max-w-md">
      <input
        placeholder="Search for any IP address or domain"
        className="w-full bg-white px-5 py-3 rounded-l-2xl"
      />

      <button className="bg-gray-900 text-white px-5 py-3 rounded-r-2xl hover:bg-gray-800 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
  )
}
