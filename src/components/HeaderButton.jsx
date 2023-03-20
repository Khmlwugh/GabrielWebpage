import { Link } from "react-router-dom"
function HeaderButton({text, to}) {
  return (
    <Link to={to} className='w-20 px-1 mx-4 place-content-center text-center border-transparent hover:border-black border-b-4'>
      {text}
    </Link>
  )
}

export default HeaderButton