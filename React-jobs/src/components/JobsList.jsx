import Spinner from './Spinner';
import Job from './Job'
import { useState,useEffect } from 'react'

const JobsList = ({isHome}) => {
  
  const [jobs,setjobs]=useState([]);
  const [loading,setLoding]=useState(true);

  useEffect (()=>{

    const fetchjobs=async ()=>{
      try{
        const res=await fetch("/api/jobs");
        const data=await res.json();
        const datare = isHome ? data.slice(0, 3) : data;
        setjobs(datare); 
      }catch(Error){
        console.log(Error); 
      } finally{
          setLoding(false);
        };
    }
    fetchjobs();
    
  },);
  

  return (
    
    <section className="w-full bg-slate-50 py-10">
      
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          {isHome ? 'Recent Job Postings' : 'All Job Postings'}
        </h2>

        
          {loading?<Spinner/>:
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((jobData) => (
            <Job key={jobData.id} jobData={jobData} />
          ))}
          </div>
          }
          
        
      </div>
    </section>
  )
}

export default JobsList