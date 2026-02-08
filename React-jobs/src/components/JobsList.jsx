import data from '../assets/data.json'
import Job from './Job'

const JobsList = () => {
  const recentJobs = data.slice(0, 3);

  return (
    <section className="w-full bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Browse Jobs
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentJobs.map((jobData) => (
            <Job key={jobData.id} jobData={jobData} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobsList