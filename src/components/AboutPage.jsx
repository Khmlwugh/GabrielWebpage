import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function AboutPage(){

  return(
  <div>
    <Header/>
    <div className='items-center flex space-x-40 justify-center h-60 bg-yellow-300 px-10 py-4'>
      <div className='flex flex-col justify-center'>
        <div className='font-bold text-3xl pb-5'>
          Hola!
        </div>
        <div className="max-w-md">
        Pariatur quas consequatur aut. Dolorum est quis eum. Placeat dolorem provident animi aliquam molestias sunt asp.
        </div>
      </div>
      <img className="max-h-36 border-2 border-black" src='src/assets/images/madvillainy.png'></img>
    </div>
    <div className='py-10 px-40'>
      <div className='px-10 py-5'>
      Ipsam molestiae vitae autem laudantium consequuntur accusamus dicta nisi. Magni et consequatur doloribus neque et. Autem omnis ut consequatur dignissimos autem earum. Dignissimos at omnis nihil non velit sit exercitationem delectus dolores. Voluptatem dolor ea aut perspiciatis.
      </div>
      <div className='py-5 px-10 flex flex-col justify-center items-center'>
        <div className='text-2xl font-semibold'>
          A little bit about me
        </div>
          <ul className='flex flex-col w-96 justify-center list-disc'>
            <li className="w-96 py-3">
              <div  className='font-semibold'>SMTP Granite Kids</div>
              <div className='text-sm text-gray-500'>2018 - present</div>
              <div>Itaque officia voluptates soluta quam voluptates omnis aut fuga. Et et explicabo libero tempore. Minima id est tenetur voluptate. </div>
            </li>
            <li className="w-96 py-3">
              <div className='font-semibold'>SMTP Granite Kids</div>
              <div className='text-sm text-gray-500'>2018 - present</div>
              <div>Itaque officia voluptates soluta quam voluptates omnis aut fuga. Et et explicabo libero tempore. Minima id est tenetur voluptate. </div>
            </li>
            <li className="w-96 py-3">
              <div className='font-semibold'>SMTP Granite Kids</div>
              <div className='text-sm text-gray-500'>2018 - present</div>
              <div>Itaque officia voluptates soluta quam voluptates omnis aut fuga. Et et explicabo libero tempore. Minima id est tenetur voluptate. </div>
            </li>
          </ul>
      </div>
      <div>
        <div className='text-2xl font-semibold'>My current responsibilities</div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default AboutPage