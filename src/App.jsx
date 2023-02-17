import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Buttons'
import IntroPage from './components/IntroPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-w-full p-0">
      <Header/>
      <IntroPage/>
      <Footer/>
    </div>
  )
}

export default App
