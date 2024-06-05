import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import AboutPage from './components/aboutpage/AboutPage.jsx'
import ContactPage from './components/contactpage/ContactPage.jsx'
import ProjectsPage from './components/projectspage/ProjectsPage.jsx'
import InterestPage from './components/interestspage/InterestsPage.jsx'
import NewHomePage from "./components/newhomepage/NewHomePage.jsx"

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      {
        path: '/',
        element: <NewHomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/interests',
        element: <InterestPage />
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
