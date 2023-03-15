function Button({bg, clss, text}){

   if (bg == 'black'){
      clss = 'bg-black text-white font-bold border-2 border-black px-6 py-2 h-10 my-3 w-6/12 md:max-w-xs'
   } else if (bg ='white'){
      clss = 'bg-transparent text-black font-bold border-2 border-black px-6 py-2 h-10 my-3 w-6/12 max-w-xs'
   }

  return(
    <button className={clss}>
      {text}
    </button>
  )
}

export default Button