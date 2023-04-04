import HeaderButton from "./HeaderButton"
import HeaderIcons from "./HeaderIcons"
import MainContainer from "./MainContainer"

function Header(){

  return (
    <MainContainer>

      <div className='py-6 px-2 flex justify-between'>
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
    </MainContainer>
  )
}

export default Header