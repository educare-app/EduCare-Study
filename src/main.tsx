import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './router/App.tsx'

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import ErrorBoundary from './router/ErrorBoundary.tsx'
import { Home } from './components/index.components.ts'
import NotFound from './components/notfound/NotFound.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router}/>
    </ErrorBoundary>
  </StrictMode>,
)
