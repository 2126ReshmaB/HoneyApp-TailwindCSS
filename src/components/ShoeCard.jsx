const ShoeCard = ({imgURL,bigShoeImg}) => {
  return (
    <div className={`border-2 rounded-xl ${imgURL === bigShoeImg ? 'border-yellow-500' : 'border-transperant'} cursor-pointer max-sm:flex-1 shadow-lg`} >
      <div className='flex justify-center items-center bg-card bg-cover bg-center sm:w-30 sm:h-30 rounded-xl max-sm:p-4'>
      <img src={imgURL} alt='imageURL' width={90} height={90} className='object-contain relative z-10 px-2 py-2'/>
      </div>
    </div>
  )
}

export default ShoeCard