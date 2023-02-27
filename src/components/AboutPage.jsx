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
        <div className='text-2xl font-semibold self-start px-52 py-4'>
          A little bit about me
        </div>
          <ul className='flex flex-col w-full justify-center items-center list-disc'>
            <li className="w-6/12 py-5 pl-14">
              <div  className='font-semibold text-left py-1'>SMTP Granite Kids</div>
              <div className='text-sm text-gray-500 text-left'>2018 - present</div>
              <div className='text-left py-1'>Itaque officia voluptates soluta quam voluptates omnis aut fuga. Et et explicabo libero tempore. Minima id est tenetur voluptate. </div>
            </li>
            <li className="w-6/12 py-5 pl-14">
              <div className='font-semibold text-left py-1'>SMTP Granite Kids</div>
              <div className='text-sm text-gray-500 text-left'>2018 - present</div>
              <div className='text-left py-1'>Itaque officia voluptates soluta quam voluptates omnis aut fuga. Et et explicabo libero tempore. Minima id est tenetur voluptate. </div>
            </li>
            <li className="w-6/12 py-5 pl-14">
              <div className='font-semibold text-left py-1'>SMTP Granite Kids</div>
              <div className='text-sm text-gray-500 text-left'>2018 - present</div>
              <div className='text-left py-1'>Itaque officia voluptates soluta quam voluptates omnis aut fuga. Et et explicabo libero tempore. Minima id est tenetur voluptate. </div>
            </li>
          </ul>
      </div>
      <div className="py-5 px-10 flex flex-col justify-center items-center w-full">
        <div className='text-2xl font-semibold self-start px-48 py-4'>My current responsibilities</div>
        <div className="px-10 py-5 w-8/12 text-left">
          Distinctio numquam sit modi nisi laboriosam quasi sed. Non consequatur totam quis voluptatem est. Possimus reprehenderit voluptas temporibus ea sed. Illum consectetur laboriosam exercitationem deserunt cumque consequatur.
        </div>
        <div className="w-6/12 py-5">
          <ul className="list-disc">
            <li className="text-left pl-5">Voluptas placeat voluptas quaerat sint qui sunt nihil. </li>
            <li className="text-left pl-5">Quia non aperiam numquam esse doloremque. Ab iure incidunt iste quaerat laudantium temporibus placeat quis.</li>
            <li className="text-left pl-5">Animi earum assumenda voluptatem alias cupiditate accusamus.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default AboutPage