import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-1 flex-col items-center'>
      <img src={imgURL} height={100} width={100} alt="customer" className='rounded-full shadow-lg'/>
      <h2 className='font-mono text-2xl mt-3 font-bold'>{customerName}</h2>
      <div className="flex gap-2 mt-2">
      <img src={star} alt='star' width={24} height={24}/>
      <p>{rating}</p>
      </div>
      <p className='mt-5 font-mono text-slate-700 info-text text-center max-w-sm'>{feedback}</p>
    </div>
  )
}

export default ReviewCard