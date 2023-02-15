import HeaderButton from "./HeaderButton"

function Header(){

  return (
    <div className='space-x-0 flex w-full'>
      <div className='place-self-center font-semibold text-lg'>
        Gabo.
      </div>
      <div className='flex px-5 space-x-10'>
        <HeaderButton text='Home'/>
        <HeaderButton text='Work'/>
        <HeaderButton text='Blog'/>
        <HeaderButton text='About'/>
      </div>
    </div>
  )
}

export default Header