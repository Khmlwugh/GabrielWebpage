import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import IntroPage from './components/IntroPage'
import AboutPage from './components/AboutPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IntroPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>


    //<div className="min-w-full p-0">
    //  <Header/>
    //  <IntroPage/>
    //  <AboutPage/>
    //  <Footer/>
    //</div>
  )
}

export default App
