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
          Est quas et voluptatem vero distinctio. Molestiae eum aliqua..
          </div>
        </div>

        <div className="py-5">
          <div className="text-2xl font-bold text-left">
             Selected Works
          </div>
          <div className="flex flex-col py-5">
            <img className='py-3' src='src/assets/images/Rectangle 2banana.png'/>
            <div className="font-bold text-left">Banana Library</div>
            <div className="text-left">
            Possimus sunt autem doloremque enim quo sit architecto reiciendis. Ipsum quam aut aut quo. Est quas et voluptatem vero distinctio. Molestiae eum aliqua...
            </div>
          </div>
          <div className="flex">
            <div className='flex items-center justify-center'>
              <div className="flex flex-col items-center py-3">
                <img className='min-w-full' src='src/assets/images/Rectangle 2image1.png'/>
                <div className="font-bold self-start py-3">
                  Float Life
                </div>
                <div className="text-left ">
                  Iusto labore necessitatibus. Ut minima autem fuga ad eaque eos.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img className='min-w-full' src='src/assets/images/Rectangle 2image2.png'/>
                <div className="font-bold self-start py-3 text-left">
                  Retro Call
                </div>
                <div className="text-left">
                  Distinctio aperiam maiores et mollitia necessitatibus. Et reprehenderit.
                </div>
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