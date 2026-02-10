import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const JobShape = ({ onDelete, job }) => {
  const navigate = useNavigate();
  const onDeleteJob = (jobId) => {
    const confirm = window.confirm("Are you sure want to delete listing ?");
    if (!confirm) return;

    onDelete(jobId);
    toast.success("Job deleted successfully !");
    navigate("/jobs");
  };

  // const editHandler = (id) => {
  //   onEdit(id);
  //   navigate("/editPage");
  // };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top back link row */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Link to="/jobs">← Back to Job Listings</Link>
      </div>

      {/* Main layout */}
      <main className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* LEFT COLUMN */}
          <section className="space-y-6 lg:col-span-2">
            {/* Header card */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                {job?.type}
              </p>

              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                {job?.title}
              </h1>

              <p className="mt-2 text-sm font-semibold text-orange-600">
                {job?.location}
              </p>
            </div>

            {/* Description + Salary card */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-extrabold text-indigo-700">
                Job Description
              </h2>

              <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                {job?.description}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-extrabold text-indigo-700">
                  Salary
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {job?.salary}
                </p>
              </div>
            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            {/* Company info */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-slate-900">
                Company Info
              </h3>

              <p className="mt-3 text-sm font-extrabold text-slate-900">
                {job?.company?.name}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {job?.company?.description}
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-700">
                    Contact Email:
                  </p>
                  <div className="mt-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                    {job?.company?.contactEmail}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-700">
                    Contact Phone:
                  </p>
                  <div className="mt-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                    {job?.company?.contactPhone}
                  </div>
                </div>
              </div>
            </div>

            {/* Manage job */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-slate-900">
                Manage Job
              </h3>

              <div className="mt-5 space-y-3">
                <Link
                  to={`/edit-job/${job.id}`}
                  className="block w-full text-center rounded-full bg-[#4b49e6] px-4 py-3 text-sm font-extrabold text-white shadow-sm">
                  Edit Job
                </Link>

                <button
                  onClick={() => onDeleteJob(job.id)}
                  type="button"
                  className=" btn-pill w-full rounded-full bg-red-600 px-4 py-3 text-sm font-extrabold text-white shadow-sm">
                  Delete
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default JobShape;
