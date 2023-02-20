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
      <Footer/>
    </div>
  )

}

export default IntroPage