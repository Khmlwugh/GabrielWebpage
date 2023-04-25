import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./MainContainer";

function WorkPage(){

  return(
    <div>
      <Header/>
      <MainContainer>
        <div className="py-8">
          <div className="text-4xl font-bold pb-6">
            Work
          </div>
          <div className="">
          These are the projects I've worked on so far..
          </div>
        </div>

        <div className="py-5 px-5">
          <div className="text-3xl md:text-2xl font-bold text-left">
             Projects
          </div>
          <div className="flex flex-col py-5 md:py-8">
            <img className='py-3' src='images/Rectangle 2banana.png'/>
            <div className="font-bold text-left pt-2">Personal Web Page</div>
            <div className="text-left md:pb-4">
            This is my personal webpage (and the page you're currently browsing). Built using Vite + React.js and Tailwind CSS.
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-5'>
            <div className="flex flex-col items-center w-full md:w-1/2 py-5 md:py-0">
              <img className='w-full max-h-80 object-cover' src='images/Statify Screenshot.png'/>
              <div className="font-bold self-start py-3 text-left">
                Statify
              </div>
              <div className="text-left ">
                This is a webpage created using the Spotify API and Vite + React.js. The purpose of the page is to be able to check the latest releases that's relevant to any country of your choosing.
              </div>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2 py-5 md:py-0">
              <img className='w-full max-h-80 object-cover' src='images/ExamAPI Screenshot.png'/>
              <div className="font-bold self-start py-3 text-left">
                Admission Exam Quiz API
              </div>
              <div className="text-left">
                This is an API that returns a number of questions from different admission exams from different colleges. The API is able to take parameters as numbeer of questions to be returned, college and subject.
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 px-5">
          <div className="font-bold text-2xl text-left py-3">Ideas I'd like to expand on</div>
          <div>
            <div className="font-bold text-left pt-4 pb-2">
              Letterboxd API
            </div>
            <div className="text-left py-2">
              I've just recently learnt of the existence of the Letterboxd API. Letterboxd.com is a film related page that allows the creation of a profile and showcase what films you've watched and review them. The API allows you to use the information in letterboxd.com.
            </div>
          </div>
        </div>

      </MainContainer>
      <Footer/>
    </div>
  )
}

export default WorkPage