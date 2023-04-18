import FooterIcons from "./FooterIcons"

function Footer(){

  return(
    <div className='px-5 flex md:flex-row flex-col justify-between md:justify-center items-start md:items-center h-14'>
      <div className="flex flex-col md:flex-row ">
        <div className='text-gray-500 text-sm text-left min-w-[100px]'>
          Gabriel Flores |
        </div>
        <div className="text-gray-500 text-left text-sm md:px-2">
          Feel free to drop a 'hello' @ gabriel.flores.2296@gmail.com
        </div>
      </div>
      <FooterIcons/>
    </div>
  )
}

export default Footer