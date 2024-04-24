import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import PageLayout from './routes/PageLayout.jsx'
import HomePage from './components/homepage/HomePage.jsx'
import AboutPage from './components/aboutpage/AboutPage.jsx'
import ContactPage from './components/contactpage/ContactPage.jsx'
import ProjectsPage from './components/projectspage/ProjectsPage.jsx'
import InterestPage from './components/interestspage/InterestsPage.jsx'
import './index.css'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
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
