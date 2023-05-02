import './App.css'
import IntroPage from './components/IntroPage'
import AboutPage from './components/AboutPage'
import { createBrowserRouter, Route, ScrollRestoration, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import WorkPage from './components/WorkPage'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path='/' element={<IntroPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/work' element={<WorkPage/>}/>
      </Route>
  )
) 

function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
