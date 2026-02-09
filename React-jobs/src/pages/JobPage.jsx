import React from "react";
import { useLoaderData } from "react-router-dom";
import JobShape from "../components/jobShape";
import Job from "../components/Job";
import Spinner from "../components/Spinner";

const JobPage = () => {
  //in the params you have to destructure the id from the url
  // const {id} = useParams();
  const job = useLoaderData();
  // const [loading,setLoading]=useState(true)
  //data Fetching again
  // const [job,setJob]=useState(null);
  // useEffect(()=>{
  //     const fetchJob=async ()=>{
  //         try{
  //             const res=await fetch(`/api/jobs/${id}`)
  //             const jobById=await res.json();
  //             console
  //             setJob(jobById);
  //         }catch(Error){
  //             console.log("Error : ",Error);
  //         }finally{
  //             setLoading(false)
  //         }
  //     }
  //     fetchJob();
  // },[])

  return (
    <>
      <JobShape job={job} />
      {/* {loading?<Spinner/>:
    <div 
    className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {console.log("your job : ",job)}
          <Job jobData={job}/>
          </div>
    } */}
    </>
  );
};
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};
// eslint-disable-next-line react-refresh/only-export-components
export { JobPage as default, jobLoader };
