import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJob = ({ addJobSubmit }) => {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    location: "",
    description: "",
    salary: "",
    company: {
      name: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    },
  });

  const navigate = useNavigate();
  // a handler for the input depending on the input name
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const newJob = formData;
    addJobSubmit(newJob);
    return navigate("/jobs");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // a handler for the company object depending on the input name
  const handleCompany = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      company: { ...prev.company, [name]: value },
    }));
  };

  //here we have to build the funtion to create our new job on submit

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen bg-slate-100">
          {/* Top row */}
          <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="text-sm font-semibold text-slate-600">
              ← Back to Job Listings
            </div>
          </div>

          <main className="mx-auto max-w-6xl px-4 pb-12">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* LEFT: FORM */}
              <section className="lg:col-span-2">
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                    Add Job
                  </h1>
                  <p className="mt-2 text-sm text-slate-600">
                    Fill in the details below to create a new job posting.
                  </p>

                  <div className="mt-6 space-y-5">
                    {/* Job Type */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Job Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white
                   px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none
                    focus:ring-2 focus:ring-indigo-300">
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                      </select>
                    </div>

                    {/* Job Title */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Job Title
                      </label>
                      <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300"
                        placeholder="e.g. Senior React Developer"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Location
                      </label>
                      <input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300"
                        placeholder="e.g. Boston, MA or Remote"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Job Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={6}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300"
                        placeholder="Write the job responsibilities and expectations..."
                      />
                    </div>

                    {/* Salary */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Salary
                      </label>
                      <input
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300"
                        placeholder="e.g. $70K - $90K / Year"
                      />
                    </div>

                    <div className="h-px bg-slate-200" />

                    {/* Company Info */}
                    <h2 className="text-sm font-extrabold text-indigo-700">
                      Company Info
                    </h2>

                    {/* Company Name */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Company Name
                      </label>
                      <input
                        name="name"
                        value={formData.company.name}
                        onChange={handleCompany}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300"
                        placeholder="e.g. NewTek Solutions"
                      />
                    </div>

                    {/* Company Description */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Company Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.company.description}
                        onChange={handleCompany}
                        rows={4}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300"
                        placeholder="Short description about the company..."
                      />
                    </div>

                    {/* Contact Email */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Contact Email
                      </label>
                      <input
                        name="contactEmail"
                        value={formData.company.contactEmail}
                        onChange={handleCompany}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300"
                        placeholder="e.g. contact@company.com"
                      />
                    </div>

                    {/* Contact Phone */}
                    <div>
                      <label className="text-sm font-extrabold text-slate-900">
                        Contact Phone
                      </label>
                      <input
                        name="contactPhone"
                        value={formData.company.contactPhone}
                        onChange={handleCompany}
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300"
                        placeholder="e.g. 555-555-5555"
                      />
                    </div>

                    {/* Button (no submit logic) */}
                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-indigo-600 px-4 py-3 text-sm font-extrabold text-white shadow-sm">
                      Add Job
                    </button>
                  </div>
                </div>
              </section>

              {/* RIGHT: PREVIEW CARD (optional visual match) */}
              <aside className="space-y-6">
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-extrabold text-slate-900">Tip</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Keep the description clear and include salary + location to
                    get more qualified applicants.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Required Fields
                  </h3>
                  <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-600">
                    <li>Job Type</li>
                    <li>Job Title</li>
                    <li>Location</li>
                    <li>Description</li>
                    <li>Salary</li>
                    <li>Company Name</li>
                    <li>Contact Email</li>
                  </ul>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </form>
    </>
  );
};

export default AddJob;
