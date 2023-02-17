function Button({bg, clss}){

   if (bg == 'black'){
      clss = 'bg-black text-white font-bold border-2 border-black px-6 py-2 h-10'
   } else if (bg ='white'){
      clss = 'bg-transparent text-black font-bold border-2 border-black px-6 py-2 h-10'
   }

  return(
    <button className={clss}>
      Botoncito
    </button>
  )
}

export default Button