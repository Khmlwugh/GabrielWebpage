import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-w-full p-0">
      <Header/>
      <div className='h-25 flex space-x-10 justify-center'>
        <Button bg='black'/>
        <Button bg='white'/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
