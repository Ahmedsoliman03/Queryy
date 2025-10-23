import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


let routing = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
   
       {
        path: "/home" , 
        element: (
            <Home />
        ),
      },
    ]
  }
])
function App() {

  return (
    <>
    <QueryClientProvider client={QueryClient}>
 <RouterProvider router={routing}></RouterProvider>
 </QueryClientProvider>
    </>
  )
}

export default App
