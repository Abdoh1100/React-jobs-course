 **React (Vite)**, **JSON Server** for the backend, and **Tailwind CSS** for styling.

---

# React Jobs Listing App

A comprehensive job listing application built with React. This project allows users to browse, add, edit, and delete job listings. It serves as a practical application to demonstrate React fundamentals including hooks, routing, and API integration.

## 🚀 Features

* **Browse Jobs:** View a list of available job postings with summaries.
* **Job Details:** Detailed view for each job, including description, salary, and company info.
* **Add Jobs:** A dedicated form to post new job opportunities.
* **Edit/Update:** Ability to modify existing job listings.
* **Delete:** Remove job postings from the system.
* **Responsive Design:** Fully responsive UI built with Tailwind CSS.
* **JSON Server:** Mock backend for REST API functionality.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM (v6)
* **Icons:** React Icons
* **Backend (Mock):** JSON Server
* **Data Fetching:** Fetch API / UseEffect

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v14 or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## ⚙️ Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/Abdoh1100/React-jobs-course.git
cd React-jobs-course

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the Mock Backend (JSON Server):**
The application relies on a `jobs.json` file to serve as a database.
```bash
npm run server

```


*Note: This usually runs on `http://localhost:5000`.*
4. **Run the Frontend:**
Open a new terminal window/tab:
```bash
npm run dev

```


*The app should now be running on `http://localhost:3000` (or the port specified by Vite).*

## 📁 Project Structure

```text
├── src/
│   ├── components/     # Reusable UI components (Navbar, JobListing, Hero, etc.)
│   ├── layouts/        # Main Layout wrappers
│   ├── pages/          # Individual pages (Home, Jobs, AddJob, EditJob, NotFound)
│   ├── App.jsx         # Main App component & Routes
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & Tailwind directives
├── public/             # Static assets
├── jobs.json           # Mock database for JSON Server
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Dependencies and scripts

```

## 📖 Key Concepts Covered

* **Components & Props:** Building reusable UI elements.
* **State Management:** Using `useState` for local data.
* **Side Effects:** Using `useEffect` to fetch data from the API.
* **Routing:** Implementing SPAs with `Link`, `NavLink`, and `useParams`.
* **Form Handling:** Managing input state and form submissions.
* **Proxies:** Configuring Vite to handle API requests smoothly.

## 🤝 Contributing

Contributions are welcome!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewFeature`).
3. Commit your Changes (`git commit -m 'Add some NewFeature'`).
4. Push to the Branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

---

*Created as part of the React Crash Course learning journey.*
