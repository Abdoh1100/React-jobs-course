import React from 'react'

function Navbar() {
  return (
   <>
   <nav className="bg-indigo-600 text-white">
    <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-lg">React Jobs</span>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <a href="#" className="px-3 py-1.5 rounded-md bg-black/80 hover:bg-black transition">Home</a>
        <a href="#" className="px-3 py-1.5 rounded-md hover:bg-white/10 transition">Jobs</a>
        <a href="#" className="px-3 py-1.5 rounded-md hover:bg-white/10 transition">Add Job</a>
      </div>
    </div>
  </nav>
   </>
  )
}

export default Navbar