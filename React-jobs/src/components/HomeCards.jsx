import React from 'react'
import Card from './Card'
const HomeCards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <Card>
         <h2 className="text-lg font-bold">For Developers</h2>
        <p className="mt-2 text-slate-600">
          Browse our React jobs and start your career today
        </p>
        <button
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-black text-white font-semibold px-4 py-2 hover:bg-black/90 transition"
        >
          Browse Jobs
        </button>
      </Card>
        <Card>
           <h2 className="text-lg font-bold">For Employers</h2>
        <p className="mt-2 text-slate-700">
          List your job to find the perfect developer for the role
        </p>
        <button
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white font-semibold px-4 py-2 hover:bg-indigo-700 transition"
        >
          Add Job
        </button>
        </Card>

    </section>
  )
}

export default HomeCards