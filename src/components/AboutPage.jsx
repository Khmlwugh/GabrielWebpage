import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MainContainer from "./MainContainer.jsx"

function AboutPage(){

  return(
  <div>
    <Header/>
    <div className="bg-yellow-300 py-10 h-[75vh] md:h-80 md:px-20 flex">
      <MainContainer>
        <div className='items-center flex flex-col md:flex-row md:space-x-36 justify-center'>
        <div className='flex flex-col justify-center'>
          <div className='font-bold text-5xl md:text-4xl pb-5 md:text-left'>
            Hola!
          </div>
          <div className="max-w-md text-xl md:text-base px-10 md:px-0 py-10 md:text-left">
          I am a 26 year old Web Developer based in Lima, Peru. I work mainly with RoR and React.js and am currently looking for an oportunity in the Tech industry.           </div>
        </div>
        <img className="w-6/12 md:w-4/12 border-2 border-black" src='images/madvillainy.png'></img>
      </div>

      </MainContainer>
    </div>

    <MainContainer>
      <div className='py-10 px-16 md:px-10 lg:px-0'>
        <div className='text-4xl md:text-2xl font-semibold text-left py-4'>
            A little bit about me
          </div>
        <div className='py-5 text-left text-base'>
        After graduating from Psychology school in 2019 and working in the field with relative success, I discovered my passion for programming and the tech industry. Although it was a risk to start from scratch, I decided to switch career paths and pursue my passion. I enrolled in Codeable, a six-month intensive bootcamp that provides comprehensive training in tech skills, soft skills, and employability support to help students become job-ready developers upon graduation.
        <br/>
        <br/>
        With my background in Psychology and newfound passion for programming, I bring a unique perspective to web development. I am proficient in RoR and React.js and have successfully completed projects in both languages. I am fluent in both Spanish and English and possess strong leadership skills, a reliable work ethic, and a desire to continuously learn and improve.        </div>
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
          <div className='text-2xl font-semibold self-start py-4 text-left'>What I bring to the table:</div>
          <div className="py-5 self-start pl-10">
            <ul className="list-disc">
              <li className="text-left pl-5">Fluency in both English and Spanish</li>
              <li className="text-left pl-5">Team-player, effective communication skills</li>
              <li className="text-left pl-5">Hard-worker, responsible and reliable</li>
              <li className="text-left pl-5">Eager to always learn something new, stack or technologies</li>
            </ul>
          </div>
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
              <li className="text-left pl-5">Because of its popularity and reliability, I'm looking into learning TypeScript</li>
              <li className="text-left pl-5">I've done small projects with Python as well, but I'm trying to expand my expertise in Python because of it flexibility in different fields.</li>
              <li className="text-left pl-5">I'm looking into geting myself familiar with Node.js given my JavaScript knowledge already.</li>
            </ul>
          </div>
        </div>


        <div>
          <div className='text-2xl font-semibold text-left py-4'>Interests</div>
          <div className="flex flex-col">
            <div>
              <div className='text-xl text-left py-4'>Cinema</div>
              <img className='w-screen max-h-28 object-cover' src='images/la_la_land_banner.jpg'/>
            </div>
            <div>
              <div className='text-xl text-left py-4'>Music</div>
              <img className='w-screen max-h-28 object-cover' src='images/Albumism_TheSmiths_AlbumMosaic.jpg'/>
            </div>
            <div>
              <div className='text-xl text-left py-4'>Cycling</div>
              <img className='w-screen max-h-28 object-cover' src='images/bike.jpg'/>
            </div>
            <div>
              <div className='text-xl text-left py-4'>Literature</div>
              <img className='w-screen max-h-28 object-cover' src='images/Literature.jpg'/>
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