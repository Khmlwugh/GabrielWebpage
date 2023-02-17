import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-w-full p-0">
      <Header/>
      <div className='h-5'>
        Body
      </div>
      <Footer/>
    </div>
  )
}

export default App
