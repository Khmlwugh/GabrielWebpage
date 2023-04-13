import Button from "./Buttons"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MainContainer from "./MainContainer"

function IntroPage(){
   
  return(
    <div className="w-full">
      <Header/>
      <div className='h-[90vh] md:max-h-96 bg-blue-500 py-20 px-5 space-y-10'>
        <MainContainer>

        <div className='font-semibold text-5xl py-5'>Gabriel Flores</div>
        <div className='py-5'>Full Stack Developer based in Lima, Perú looking for job opportunities in the Tech industry. Fluent in English and Spanish, responsible, reliable and hard-working.</div>
        <div className='flex-col justify-center items-center flex md:flex-row md:space-x-10'>
          <Button destination='/work' bg='black'>
            View my works
          </Button>
          <Button destination='/about' bg='white'>
            Read more about me
          </Button>
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
            <img className='w-full max-h-80 object-cover' src='/images/Rectangle 2image1.png'/>
            <div className="font-bold self-start py-3 text-left">
              Statify
            </div>
            <div className="text-left ">
            This is a webpage created using the Spotify API and Vite + React.js. The purpose of the page is to be able to check the latest releases that's relevant to any country of your choosing.
            </div>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <img className='w-full max-h-80 object-cover' src='images/Rectangle 2image2.png'/>
            <div className="font-bold self-start py-3 text-left">
            Admission Exam Quiz API
            </div>
            <div className="text-left">
            This is an API that returns a number of questions from different admission exams from different colleges. The API is able to take parameters as numbeer of questions to be returned, college and subject.
            </div>
          </div>
        </div>
        <Button destination='/work' bg='white'>
            See more...
        </Button>
      </div>

      <div className="py-10">
        <div className="font-bold text-2xl text-left">About me</div>

        <div className="flex items-center justify-center py-5">
          <img src='images/Rectangle 2small.png'/>
          <div className="flex flex-col px-5">
            <div className="text-2xl font-bold text-left">A little bit more about me</div>
            <div className="text-left">I graduated from Psychology school in 2019 and worked on the field for some years with relative success. I learnt about programming and the tech industry in the way and fell in love with it. After a bit, I...</div>
          </div>
        </div>
        <Button destination='/about' bg='white'>
            Read more about me
        </Button>
      </div>

      </MainContainer>
    </div>  
  )

}

export default IntroPage