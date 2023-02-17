import HeaderButton from "./HeaderButton"
import HeaderIcons from "./HeaderIcons"

function Header(){

  return (
    <div className='px-32 py-6 space-x-0 flex w-screen'>
      <div className='w-1/4 place-self-center font-semibold text-lg'>
        Gabo.
      </div>
      <div className='flex px-24 space-x-10'>
        <HeaderButton text='Home'/>
        <HeaderButton text='Work'/>
        <HeaderButton text='Blog'/>
        <HeaderButton text='About'/>
      </div>
      <HeaderIcons/>
    </div>
  )
}

export default Header