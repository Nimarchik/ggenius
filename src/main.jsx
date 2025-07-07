import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Page/App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { HelmetProvider } from 'react-helmet-async';


import './i18n.js'
import Heroes from './Page/views/Heroes.jsx'
import Home from './Page/Home.jsx'
import About from './Page/views/About.jsx'
import PreviewHeroes from './Page/PreviewHeroes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/uk/Home" replace />
  },
  {
    path: '/:l',
    element: <App />,
    children: [
      {
        path: 'Home',
        element: <Home />
      },
      {
        path: 'Heroes',
        element: <Heroes />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'PreviewHeroes/:id',
        element: <PreviewHeroes />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
