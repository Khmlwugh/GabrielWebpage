import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function AboutPage(){

  return(
  <div>
    <Header/>
    <div className='flex space-x-40 justify-center h-50 bg-yellow-300 px-10 py-4'>
      <div className='flex flex-col justify-center'>
        <div className='font-bold text-3xl'>
          Hola!
        </div>
        <div className="max-w-md">
        Pariatur quas consequatur aut. Dolorum est quis eum. Placeat dolorem provident animi aliquam molestias sunt asp.
        </div>
      </div>
      <img className="max-h-36 border-2 border-black" src='src/assets/images/madvillainy.png'></img>
    </div>
    <Footer/>
  </div>
  )
}

export default AboutPage