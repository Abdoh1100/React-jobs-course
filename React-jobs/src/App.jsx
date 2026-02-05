import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobsList from './components/JobsList'
import ViewAllJobs from './components/ViewAllJobs'
// const names = ['React with Tailwind CSS', 'Vite', 'JavaScript']
const App = () => {
  return (
    <>
  <Navbar />
  <Hero />
  <HomeCards />
  <JobsList />
  <ViewAllJobs />
  

</>
//     <>
//     <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
//   Test Button
// </button>
//     <div classNameName="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       {names.map((name) => (
//         <h1
//           key={name}
//           classNameName="text-3xl font-bold text-gray-800 mb-4"
//         >
//           {name}
//         </h1>
//       ))}
//       </div>
//   </>
  )
}

export default App