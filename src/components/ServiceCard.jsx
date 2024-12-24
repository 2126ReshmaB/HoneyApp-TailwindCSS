const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[300px] sm:min-w-[300px] w-full rounded-[20px] bg-gray-100 shadow-lg px-8 py-10'>
      <div className='w-11 h-11 flex items-center bg-yellow-500 rounded-full justify-center'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-mono text-xl leading-normal font-bold'>{label}</h3>
      <p className='mt-3 break-words font-mono leading-normal text-slate-500'>{subtext}</p>
    </div>
  )
}

export default ServiceCard