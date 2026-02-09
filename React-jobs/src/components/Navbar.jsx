import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const activeClassName = ({ isActive }) =>
  `px-3 py-1.5 rounded-md ${isActive ? 'bg-white/20' : 'hover:bg-white/10'} transition`
  return (
   <>
   <nav className="bg-indigo-600 text-white">
    <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-lg">React Jobs</span>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <NavLink to="/" className={activeClassName}>Home</NavLink>
        <NavLink to="/jobs" className={activeClassName}>Jobs</NavLink>
        <NavLink to="/addJob" className={activeClassName}>Add Job</NavLink>
      </div>
    </div>  
  </nav>
   </>
  )
}

export default Navbar