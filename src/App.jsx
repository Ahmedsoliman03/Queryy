import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

let routing = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
   
       {
        // path: "/home" , 
        index: true ,
        element: (
            <Home />
        ),
      },
    ]
  }
])
function App() {
const queryClient = new QueryClient() 
  return (
    <>
    <QueryClientProvider client={queryClient}>
 <RouterProvider router={routing}></RouterProvider>
 <ReactQueryDevtools/>
 </QueryClientProvider>
    </>
  )
}

export default App
