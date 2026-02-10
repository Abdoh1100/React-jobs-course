import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./pages/TestPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import EditPage from "./pages/EditPage";
const App = () => {
  //Add A job
  const addJob = async (newJob) => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete job
  const deleteJobById = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

  //Edit A job by id
  const updateJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJobById} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
