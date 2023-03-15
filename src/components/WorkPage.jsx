import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./MainContainer";

function WorkPage(){

  return(
    <div>
      <Header/>
      <MainContainer>
        <div className="py-14">
          <div className="text-4xl font-bold pb-6">
            Work
          </div>
          <div className="">
          These are the projects I've worked on so far..
          </div>
        </div>

        <div className="py-5">
          <div className="text-2xl font-bold text-left">
             Selected Works
          </div>
          <div className="flex flex-col py-5">
            <img className='py-3' src='src/assets/images/Rectangle 2banana.png'/>
            <div className="font-bold text-left pt-2">Personal Web Page</div>
            <div className="text-left pb-4">
            This is my personal webpage (and the page you're currently browsing). Built using Vite + React.js and Tailwind CSS.
            </div>
          </div>
          <div className='flex items-center justify-center space-x-5'>
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
                Admission Exam Quiz
              </div>
              <div className="text-left">
                This is an API that returns a number of questions from different admission exams from different colleges. The API is able to take parameters as numbeer of questions to be returned, college and subject.
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="font-bold text-2xl text-left">Side Projects</div>

          <div className="flex items-center justify-center py-5">
            <img src='src/assets/images/Rectangle 2small.png'/>
            <div className="flex flex-col px-5">
              <div className=" font-bold text-left">Buckinghamshire Croatian Quantify</div>
              <div className="text-left">Expedita et eveniet non accusantium perspiciatis. Quam deleniti pariatur optio. Quo dicta voluptate...</div>
              <div className="text-left text-sm text-gray-600">Sun Jan 29, 2023</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-left">Club transform</div>
            <div className="text-left">
            Voluptatum vel repudiandae occaecati. Mollitia quae perferendis dolore accusantium vel id. Voluptas perferendis id quasi amet in a qu...
            </div>
            <div className="text-left text-sm text-gray-600">Sun Jan 29, 2023</div>
          </div>
        </div>
        <div className="py-5">
          <div className="font-bold text-2xl text-left py-3">Experiments & Works in progress</div>
          <div>
            <div className="font-bold text-left">
              Rubber
            </div>
            <div className="text-left py-2">
              Aut amet nihil mollitia dolorem commodi quidem unde. Voluptas quaerat numquam quis sunt quas ab asperiores. Iste totam enim voluptas quo...
            </div>
            <div className="text-left text-sm text-gray-600">Sun Jan 29, 2023</div>
          </div>
        </div>

      </MainContainer>
      <Footer/>
    </div>
  )
}

export default WorkPage