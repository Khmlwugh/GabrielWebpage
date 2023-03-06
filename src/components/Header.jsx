import HeaderButton from "./HeaderButton"
import HeaderIcons from "./HeaderIcons"

function Header(){

  return (
    <div className='py-6 space-x-0 flex w-screen justify-center'>
      <div className='w-1/4 place-self-center font-semibold text-lg'>
        Gabo.
      </div>
      <div className='flex px-24 space-x-10'>
        <HeaderButton to='/' text='Home'/>
        <HeaderButton to='/work' text='Work'/>
        <HeaderButton to='/' text='Blog'/>
        <HeaderButton to='/about' text='About'/>
      </div>
      <HeaderIcons/>
    </div>
  )
}

export default Header