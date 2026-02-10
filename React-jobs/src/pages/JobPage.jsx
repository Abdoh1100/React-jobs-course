import React from "react";
import { useLoaderData } from "react-router-dom";
import JobShape from "../components/jobShape";
import Spinner from "../components/Spinner";

const JobPage = ({ deleteJob }) => {
  const loadedjob = useLoaderData();

  return (
    <>
      <JobShape onDelete={deleteJob} job={loadedjob} />
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
