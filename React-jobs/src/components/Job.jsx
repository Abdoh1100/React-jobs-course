import { useState } from "react"
import {FaMapMarker} from 'react-icons/fa'
import { Link } from "react-router-dom"
const Job = ({jobData}) => {

  const [showFullDescription,setShowFullDescription] =useState(false)

  let description = jobData.description;

  if(!showFullDescription){
    description = jobData.description.substring(0, 20) + "..."
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5">
      <div className="text-sm text-gray-500">{jobData.type}</div>

      <h3 className="mt-2 text-lg font-semibold text-gray-900">{jobData.title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      <button onClick={() => setShowFullDescription((prevState)=>!prevState)} 
      className="text-sm text-indigo-600 hover:text-indigo-800">
        {showFullDescription ? "Less" : "More"}
      </button>

      <div className="mt-5 space-y-1">
        <div className="text-sm font-semibold text-indigo-700">
          {jobData.salary}</div>
        <div className="text-sm text-orange-600 flex items-center">
          <FaMapMarker className="mr-1" />
          {jobData.location}
        </div>
      </div>

      <div className="mt-6">
        <Link 
        to={`/jobs/${jobData.id}`}
        className="rounded-md bg-indigo-600 px-4 py-2 
        text-sm font-medium text-white hover:bg-indigo-700">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Job