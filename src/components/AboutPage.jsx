import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MainContainer from "./MainContainer.jsx"

function AboutPage(){

  return(
  <div>
    <Header/>
    <div className="bg-yellow-300 py-4 h-60 flex">
      <MainContainer>
        <div className='items-center flex space-x-40 justify-center'>
        <div className='flex flex-col justify-center'>
          <div className='font-bold text-4xl pb-5 text-left'>
            Hola!
          </div>
          <div className="max-w-md text-left">
          I am a 26 year old Web Developer based in Lima, Peru. I work mainly with RoR and React.js and am currently looking for an oportunity in the Tech industry.           </div>
        </div>
        <img className="max-h-36 border-2 border-black" src='src/assets/images/madvillainy.png'></img>
      </div>

      </MainContainer>
    </div>

    <MainContainer>
      <div className='py-10'>
        <div className='text-2xl font-semibold text-left py-4'>
            A little bit about me
          </div>
        <div className='py-5 text-left'>
        I graduated from Psychology school in 2019 and dabbled between jobs until 2022. That year I decided to risk it all to pursue a carreer in what I was passioned about. I joined a 6 month Full Stack bootcamp called Codeable and learnt all necessary to get into this competitive industry,
        </div>
        <div className='py-5 flex flex-col justify-center items-center'>
          <div className='text-2xl font-semibold self-start py-4'>
            Education
          </div>
            <ul className='px-2 flex flex-col w-full justify-center list-disc list-inside'>
              <li className="text-left font-semibold">Codeable</li>
              <div className="pl-6">
                <div className='text-sm text-gray-500 text-left'>February 2022 - July 2022</div>
                <div className='text-left py-1'>Codeable’s 6-month program covers CS fundamentals, full stack technologies as Ruby on Rails, Postgresql and React. As well as, focusing on soft skills and English proficiency to ensure employability.</div>
              </div>
              <li className="text-left font-semibold">UNMSM - Psychology School</li>
              <div className="pl-6">
                <div className='text-sm text-gray-500 text-left'>2013 - 2019</div>
                <div className='text-left py-1'>I studied in one of the best schools in Peru. The career lasts a total of 6 years, 5 years of theory classes and a one-year internship.</div>
              </div>
            </ul>
        </div>
        <div className="py-5 flex flex-col justify-center items-center w-full">
          <div className='text-2xl font-semibold self-start py-4'>Stack</div>
          <div className="py-5 text-left">
            During the bootcamp at Codeable I learned the fundamentals for Web Development and I've been trying to expand my knowledge beyond that on my own.
          </div>
          <div className='text-xl self-start pt-2'>What I know</div>
          <div className="py-5 self-start pl-10">
            <ul className="list-disc">
              <li className="text-left pl-5">Website fundamentals with as HTML, CSS & JavaScript</li>
              <li className="text-left pl-5">Front-end Frameworks: React.js and its ecosystem libraries:
                <ul className="pl-5">
                  <li>React Router</li>
                  <li>CSS in JS: Emotion, Styled Components</li>
                  <li>React Testing Library</li>
                  <li>Formik</li>
                </ul>
              </li>
              <li className="text-left pl-5">Back-end Frameworks: Ruby on Rails:
                <ul className="pl-5">
                  <li>Full Stack application using MVC pattern</li>
                  <li>Restul API including authentication and authorization</li>
                  <li>Worked with Active Record, Active Storage, Active Mailer</li>
                  <li>Used gems such as Bcrypt, Devise and Pundit</li>
                </ul>
              </li>
              <li className="text-left pl-5">PostgreSQL</li>
              <li className="text-left pl-5">Trunk-based development using Git and Github</li>
            </ul>
          </div>
          <div className='text-xl self-start pt-2'>What I'm learning</div>
          <div className="py-5 self-start pl-10">
            <ul className="list-disc">
              <li className="text-left pl-5">Because of its popularity and , I'm looking into learning TypeScript</li>
              <li className="text-left pl-5">I've done small projects with Python as well, but I'm trying to expand my expertise in Python</li>
              <li className="text-left pl-5">Node.js is another backend framework I've set my eyes into</li>
            </ul>
          </div>
        </div>

        <div>
          <div className='text-2xl font-semibold text-left py-4'>Interests</div>
          <div className="flex flex-col">
            <div>
              <div className='text-xl text-left py-4'>Cinema</div>
              <img className='w-screen max-h-28 object-cover' src='src/assets/images/Rectangle 2image1.png'/>
            </div>
            <div>
              <div className='text-xl text-left py-4'>Music</div>
              <img className='w-screen max-h-28 object-cover' src='src/assets/images/Rectangle 2image1.png'/>
            </div>
            <div>
              <div className='text-xl text-left py-4'>Cycling</div>
              <img className='w-screen max-h-28 object-cover' src='src/assets/images/Rectangle 2image1.png'/>
            </div>
            <div>
              <div className='text-xl text-left py-4'>Literature</div>
              <img className='w-screen max-h-28 object-cover' src='src/assets/images/Rectangle 2image1.png'/>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
    <Footer/>
  </div>
  )
}

export default AboutPage