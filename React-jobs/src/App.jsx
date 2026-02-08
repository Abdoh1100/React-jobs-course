import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements}from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import TestPage from './pages/TestPage'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<HomePage />} />
    <Route path="/jobs" element={<JobsPage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/test" element={<TestPage />} />
  </Route>
  
  )
)
const App = () => {
  return (
  <>
  <RouterProvider router={router} />
  </>
  )
}

export default App