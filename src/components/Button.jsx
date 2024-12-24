const Button = ({label,iconURL,backgroundColor,textColor,borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 mt-2 ${backgroundColor} shadow-lg border font-mono text-lg leading-none  text-${textColor} rounded-full border-${borderColor}`}>
      {label}
      {iconURL && <img src={iconURL} alt="iconURL" className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button