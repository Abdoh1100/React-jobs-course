const job = ({jobData}) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5">
      <div className="text-sm text-gray-500">{jobData.type}</div>

      <h3 className="mt-2 text-lg font-semibold text-gray-900">{jobData.title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">{jobData.description}</p>

      <div className="mt-5 space-y-1">
        <div className="text-sm font-semibold text-indigo-700">{jobData.salary}</div>
        <div className="text-sm text-orange-600">{jobData.location}</div>
      </div>

      <div className="mt-6">
        <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          Read More
        </button>
      </div>
    </div>
  )
}

export default job