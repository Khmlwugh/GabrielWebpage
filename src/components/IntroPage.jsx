import Button from "./Buttons"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MainContainer from "./MainContainer"

function IntroPage(){
   
  return(
    <div className="">
      <Header/>
      <div className='h-screen max-h-96 bg-blue-500 py-20 px-5 space-y-10'>
        <MainContainer>

        <div className='font-semibold text-5xl py-5'>Gabriel Flores</div>
        <div className='py-5'>Full Stack Developer based in Lima, Perú.</div>
        <div className='flex-col justify-center items-center flex md:flex-row md:space-x-10'>
          <Button bg='black' text='View my works'/>
          <Button bg='white' text='Read more about me'/>
        </div>
        </MainContainer>
      </div>
      <div className='flex bg-black w-100 h-24 align-center items-center justify-center space-x-10'>
        <div className="text-white font-bold">
          Find me across the internet:
        </div>
        <div className="text-white">
          Icons
        </div>
      </div>
      <MainContainer>
        
      <div className="flex flex-col items-center">
        <div className="font-bold text-2xl py-10">Personal Projects</div>
        <div className='flex md:flex-row flex-col items-center justify-center md:space-x-5'>
          <div className="flex flex-col items-center w-1/2">
            <img className='w-full max-h-80 object-cover' src='src/assets/images/Rectangle 2image1.png'/>
            <div className="font-bold self-start py-3 text-left">
              Statify
            </div>
            <div className="text-left ">
            This is a webpage created using the Spotify API and Vite + React.js. The purpose of the page is to be able to check the latest releases that's relevant to any country of your choosing.
            </div>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <img className='w-full max-h-80 object-cover' src='src/assets/images/Rectangle 2image2.png'/>
            <div className="font-bold self-start py-3 text-left">
            Admission Exam Quiz API
            </div>
            <div className="text-left">
            This is an API that returns a number of questions from different admission exams from different colleges. The API is able to take parameters as numbeer of questions to be returned, college and subject.
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="font-bold text-2xl text-left">Side Projects</div>

        <div className="flex items-center justify-center py-5">
          <img src='src/assets/images/Rectangle 2small.png'/>
          <div className="flex flex-col px-5">
            <div className="text-2xl font-bold text-left">Buckinghamshire Croatian Quantify</div>
            <div className="text-left">Expedita et eveniet non accusantium perspiciatis. Quam deleniti pariatur optio. Quo dicta voluptate...</div>
            <div className="text-left text-sm text-gray-600">Sun Jan 29, 2023</div>
          </div>
        </div>
        <div className="flex flex-col py-5">
          <div className='font-bold text-left text-2xl py-5'>Recent Writing</div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-left">Vortals convergence</div>
            <div className='text-left'>Iusto labore necessitatibus. Ut minima autem fuga ad eaque eos. Cumq...</div>
            <div className="text-left text-sm text-gray-500">Thu Jan 09, 2031 </div>
          </div>

          <div className="flex flex-col py-5">
            <div className="text-2xl font-bold text-left">Unbranded navigate</div>
            <div className='text-left'>Veniam consequatur distinctio. Sit dicta non odit ut. Eum iure dolor in et odit. Consectetur quis ut sit ducimus.</div>
            <div className="text-left text-sm text-gray-500">Fri Jun 11, 2027</div>
          </div>
        </div>
        <Button text='View all Posts'/>
      </div>

      </MainContainer>
      <Footer/>
    </div>
  )

}

export default IntroPage