import Button from "./Buttons"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MainContainer from "./MainContainer"
import { Link, ScrollRestoration } from "react-router-dom"

function IntroPage(){
   
  return(
    <div className="w-full">
      <Header/>
      <div className='flex h-[80vh] md:h-[60vh] bg-blue-500 py-20 px-5 '>
        <MainContainer>
          <div className="flex flex-col justify-between h-full">
            <div className='font-semibold text-6xl py-10'>Gabriel Flores</div>
            <div className='py-8 text-lg'>Full Stack Developer based in Lima, Perú looking for job opportunities in the Tech industry. Fluent in English and Spanish, responsible, reliable and hard-working.</div>
            <div className='flex-col py-5 justify-center items-center flex md:flex-row md:space-x-10'>
              <Button destination='/work' bg='black'>
                View my works
              </Button>
              <Button destination='/about' bg='white'>
                Read more about me
              </Button>
            </div>
          </div>
        </MainContainer>
      </div>
      <div className='md:px-20 flex flex-col md:flex-row bg-black h-[15vh] align-center items-center justify-center'>
        <div className=" text-white font-bold pb-5 md:pb-0 w-80">
          Find me across the internet:
        </div>  
        <div className="flex text-white justify-between md:max-w-[250px] px-32 md:px-0 w-full md:w-[30vw]">
          <a href='mailto:gabriel.flores.2296@gmail.com'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/dev-gabriel-flores/' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" fill="rgba(255,255,255,1)"/></svg>
          </a>
          <a href='https://github.com/Khmlwugh' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" fill="rgba(255,255,255,1)"/></svg>
          </a>
          <a href='https://www.instagram.com/this.aint.gabo/' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" fill="rgba(255,255,255,1)"/></svg>
          </a>
        </div>
      </div>


      <MainContainer>  
      <div className="flex flex-col items-center py-5 md:px-10">
        <div className="font-bold text-3xl py-3">Personal Projects</div>
        <div className='flex md:flex-row flex-col items-center md:items-start justify-center md:space-x-5'>
          <div className="flex flex-col items-center w-5/6 py-8">
            <Link className="w-full max-h-80" target="_blank" to='https://statify-releases.netlify.app/'>
              <img className='w-full max-h-80 object-cover' src='images/Statify Screenshot.png'/>
            </Link>
            <div className="font-bold self-start text-xl py-3 text-left">
              Statify
            </div>
            <div className="text-left ">
            This is a webpage created using the Spotify API and Vite + React.js. The purpose of the page is to be able to check the latest releases that's relevant to any country of your choosing.
            </div>
          </div>
          <div className="flex flex-col items-center w-5/6 py-8">
            <img className='w-full max-h-80 object-cover' src='images/ExamAPI Screenshot.png'/>
            <div className="font-bold self-start text-xl py-3 text-left">
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

      <div className="flex flex-col items-center py-5 md:px-10">
        <div className="px-10 font-bold text-2xl text-left">About me</div>

        <div className="flex flex-col md:flex-row items-center justify-center py-5 px-10">
          <img className="pb-3 md:pb-0 md:py-3 md:w-11/12 object-cover w-full" src='images/Rectangle 2small.png'/>
          <div className="flex flex-col md:px-5">
            <div className="text-xl font-bold text-left pb-3">A little bit more about me</div>
            <div className="text-left">After graduating from Psychology school in 2019 and working in the field with relative success, I discovered my passion for programming and the tech industry. Although it was a risk to start from scratch, I decided to switch career paths and pursue...</div>
          </div>
        </div>
        <Button destination='/about' bg='white'>
            Read more about me
        </Button>
      </div>

      </MainContainer>
      <ScrollRestoration/>
      <Footer/>
    </div>  
  )

}

export default IntroPage