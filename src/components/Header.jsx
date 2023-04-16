import { Link } from "react-router-dom"
import HeaderButton from "./HeaderButton"
import HeaderIcons from "./HeaderIcons"
import MainContainer from "./MainContainer"
import { useState } from "react"

function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="h-[5vh] min-h-[30px] md:h-20 md:px-5">

    <MainContainer>
      <section className="md:hidden flex">
        <div className="px-5 my-3 space-y-2" onClick={() => setIsMenuOpen((current) => !current)}>
          <div className="w-8 h-0.5 bg-gray-800"></div>
          <div className="w-8 h-0.5 bg-gray-800"></div>
          <div className="w-8 h-0.5 bg-gray-800"></div>
        </div>
        <div className="flex items-center">Menu</div>
        <div className={isMenuOpen ? "showMenu" : "hideMenu"}>
          <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsMenuOpen(false)}>
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/work'>Work</Link>
            </li>
          </ul>
        </div>
      </section>

      <div className='hidden py-6 px-2 md:flex justify-between'>
        <div className='place-self-center font-semibold text-lg'>
          <a href='/'>
            Gabo.
          </a>
        </div>
        <div className='flex px-24 space-x-10'>
          <HeaderButton to='/' text='Home'/>
          <HeaderButton to='/about' text='About'/>
          <HeaderButton to='/work' text='Work'/>
        </div>
        <HeaderIcons/>
      </div>
      <style>{`
      .hideMenu {
        display: none;
      }
      .showMenu {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      `}</style>
    </MainContainer>
    </div>
    
  )
}

export default Header