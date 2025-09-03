import { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import FeedbackPage from './pages/FeedbackPage.jsx'
import ReviewPage from './pages/ReviewPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import MainLayout from './MainLayout.jsx'




function App() {

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path = '/feedback' element = {<FeedbackPage />} />
      <Route path = '/reviews' element = {<ReviewPage />} />
      <Route path = '/contact' element = {<ContactPage />} />
    </Route>
  )
);

  return <RouterProvider router={router} />
}

export default App
