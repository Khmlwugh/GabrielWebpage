import Button from "./Buttons"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function IntroPage(){
   
  return(
    <div>
      <Header/>
      <div className='h-screen max-h-96 bg-blue-500 py-20 px-20 space-y-10'>
        <div className='font-semibold text-5xl'>Gabriel Flores</div>
        <div className='px-40'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        <div className='space-x-10'>
          <Button bg='black' text='View my works'/>
          <Button bg='white' text='Read more about me'/>
        </div>
      </div>
      <div className='flex bg-black w-100 h-24 align-center items-center justify-center space-x-10'>
        <div className="text-white font-bold">
          Find me across the internet:
        </div>
        <div className="text-white">
          Icons
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="font-bold text-2xl py-10 w-6/12">Case Studies</div>
        <div className='flex items-center justify-center'>
          <div className="flex flex-col items-center px-30 py-3">
            <img className='h-6/12' src='src/assets/images/Rectangle 2image1.png'/>
            <div className="font-bold self-start py-3 w-100 ">
              Float Life
            </div>
            <div className="w-7/12 text-left ">
              Iusto labore necessitatibus. Ut minima autem fuga ad eaque eos.
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className='h-6/12' src='src/assets/images/Rectangle 2image2.png'/>
            <div className="font-bold self-start px-24 py-3 text-left w-100">
              Retro Call
            </div>
            <div className="w-7/12 text-left">
              Distinctio aperiam maiores et mollitia necessitatibus. Et reprehenderit.
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="font-bold text-2xl ">Side Project</div>

        <div className="flex items-center justify-center py-5">
          <img src='src/assets/images/Rectangle 2small.png'/>
          <div className="flex flex-col px-5">
            <div className="text-2xl font-bold text-left">Buckinghamshire Croatian Quantify</div>
            <div className="text-left">Expedita et eveniet non accusantium perspiciatis. Quam deleniti pariatur optio. Quo dicta voluptate...</div>
            <div className="text-left text-sm text-gray-600">Sun Jan 29, 2023</div>
          </div>
        </div>
      <div>
        <div className='font-bold text-2xl'>Recent Writing</div>

        <div>
          <div className="text-2xl font-bold text-left">Vortals convergence</div>
          <div>Iusto labore necessitatibus. Ut minima autem fuga ad eaque eos. Cumq...</div>
          <div>Thu Jan 09, 2031 </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )

}

export default IntroPage