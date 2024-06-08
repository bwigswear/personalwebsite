import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import AboutPage from './components/aboutpage/AboutPage.jsx'
import ContactPage from './components/contactpage/ContactPage.jsx'
import ProjectsPage from './components/projectspage/ProjectsPage.jsx'
import InterestPage from './components/interestspage/InterestsPage.jsx'
import HomePage from './components/homepage/HomePage.jsx'

import ParticlesComponent from './ParticlesComponent.jsx';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
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
    <ParticlesComponent style={{
      opacity: 1,
      position: 'fixed',   // Fixed positioning to ensure it stays in place
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,          // Ensure it stays behind other content
    }} />
  </React.StrictMode>,
)
