import { Link } from "react-router-dom"

function Button({bg, clss, destination, children}){

   if (bg == 'black'){
      clss = 'bg-black text-white font-bold border-2 border-black py-2 h-10 my-3 w-6/12 max-w-xs'
   } else if (bg ='white'){
      clss = 'bg-transparent text-black font-bold border-2 border-black py-2 h-10 my-3 w-6/12 max-w-xs'
   }

  return(
      <Link className={clss} to={destination}>
        <button>
            {children}
        </button>
      </Link>
  )
}

export default Button