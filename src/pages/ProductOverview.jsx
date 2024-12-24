import { Link, useLocation } from "react-router-dom"
import Nav from "../components/Nav"

const ProductOverview = () => {
  const location = useLocation();
  const {imgURL, name, price} = location.state || {};

  return (
      <div className='flex mt-10 mx-20'>
        <Link to='/' className='underline text-yellow-500'>Back</Link>
        <div className='ml-20 mt-20 md-10 bg-gradient-to-r from-gray-100 to-gray-300'>
          <img src={imgURL} alt="image" width={500} height={500}/>
        </div>
        <div className='mb-10 mt-20 mx-10'>
          <div className='flex flex-col gap-2.5'>
          <p className='font-mono text-slate-500'><sapn className='font-bold font-mono text-black'>New</sapn></p>
          <p className='text-3xl font-mono mt-3'>{name}</p>
          <p className='font-mono text-yellow-500'>500g</p>
          <p className='font-mono mt-5 text-2xl font-semibold'>$15.99</p>
          <p className='font-mono text-gray-500'>Pure Wildflower Honey from the hills of Vermont</p>
          <p className='font-mono text-red-500 font-semibold'>Shelf Life: 12 Months</p>
          <p className='font-mono'>Quantity: select a quantity</p>
          <div className='flex flex-row gap-2'>
            <button className='flex items-center text-gray-500 border border-black rounded px-5 py-1'>1</button>
            <button className='flex items-center text-gray-500 border border-black rounded px-5 py-1'>2</button>
            <button className='flex items-center text-gray-500 border border-black rounded px-5 py-1'>3</button>
            <button className='flex items-center text-gray-500 border border-black rounded px-5 py-1'>4</button>
          </div>
          <p className='mt-2 text-yellow-500 font-mono'>Packed with antioxidants, enzymes, and vitamins, Wildflower <br />Honey is known for its numerous health benefits, including boosting the immune<br /> system, soothing sore throats, and aiding digestion.</p>
          <button className='bg-black rounded shadow-lg text-white py-2 px-3 mt-10'>Add to Cart</button>
          </div>
        </div>
      </div>
  )
}

export default ProductOverview