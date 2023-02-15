import HeaderButton from "./HeaderButton"

function Header(){

  return (
    <div>
      <div>
        Gabo.
      </div>
        <HeaderButton text='Home'/>
        <HeaderButton text='Work'/>
        <HeaderButton text='Blog'/>
        <HeaderButton text='About'/>
      </div>
  )
}

export default Header