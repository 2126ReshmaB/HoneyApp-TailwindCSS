import {star} from '../assets/icons';

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full bg-gray-100 shadow-lg rounded-lg p-2 items-center'>
      <img src={imgURL} alt="image" className='w-[200px] h-[200px]' />
      
      <div className='mt-3 flex flex-col justify-start text-xl'>
        <h3 className='font-mono font-semibold'>{name}</h3>
        <p className='font-mono text-yellow-500 font-semibold'>{price}</p>
      </div>

      <div class="flex mt-3">
            <span class="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
            <span class="text-gray-500 ml-2 font-mono">(95 reviews)</span>
          </div>
    </div>
    
  )
}

export default PopularProductCard