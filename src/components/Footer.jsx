import FooterIcons from "./FooterIcons"

function Footer(){

  return(
    <div className='flex space-x-60 justify-center items-center h-14'>
      <div className='text-gray-500 text-sm'>
        Gabriel Flores | Feel free to drop a 'hello' @ gabriel.flores.2296@gmail.com
      </div>
      <FooterIcons/>
    </div>
  )
}

export default Footer