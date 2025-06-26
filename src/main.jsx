import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import Provider from './Provider/Provider.jsx'
import { ToastContainer } from 'react-toastify'

import AOS from 'aos';
AOS.init();


// useEffect(() => {
//   AOS.init({
//     duration: 800,       // animation duration
//     offset: 120,         // offset (in px) from the original trigger point
//     easing: 'ease-in-out', // default easing
//     once: true,           // whether animation should happen only once
//   });
// }, []);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider>
      <RouterProvider router={router}>

      </RouterProvider>
      <ToastContainer></ToastContainer>
    </Provider>
  </StrictMode>,
)
