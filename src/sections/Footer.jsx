import { copyrightSign, facebook, instagram, twitter } from "../assets/icons"
import { honeyLogo } from "../assets/images"

const Footer = () => {
  const products = ["Eucalyptus Honey","Wildflower Honey","Manuka Honey","Forest Honey","Forest Honey","Vanilla Bean Honey"];
  return (
    <section>
      <div className='flex flex-1 gap-2'>
        <img src={honeyLogo} alt="Logo" width={100} height={100} />
        <div className='flex flex-col'>
        <p className='text-white font-mono'>Share you queries here...</p>
        <div className='flex gap-3 mt-2'>
          <div className='bg-white rounded-full p-2'>  <img src={facebook} alt="facebook" width={20} height={20}/></div>
          <div className='bg-white rounded-full p-2'>  <img src={twitter} alt="facebook" width={20} height={20}/></div>
          <div className='bg-white rounded-full p-2'>  <img src={instagram} alt="facebook" width={20} height={20}/></div>
        </div>
        </div>
      </div>
      <div className='flex mt-5 ml-5 gap-20'>
        <div className='flex flex-col gap-1.5'>
          <h1 className="text-white font-mono text-xl mb-5">Products</h1>
          {products.map((product) => <p className='text-gray-300 font-mono'>{product}</p>)}
        </div>
        <div className='flex flex-col gap-1.5'>
          <h1 className="text-white font-mono text-xl mb-5">Help</h1>
          <p className='text-gray-300 font-mono'>About Us</p>
          <p className='text-gray-300 font-mono'>FAQs</p>
          <p className='text-gray-300 font-mono'>How it works</p>
          <p className='text-gray-300 font-mono'>Privacy Policy</p>
          <p className='text-gray-300 font-mono'>Payment Policy</p>
          
        </div>
        <div className='flex flex-col gap-1.5'>
          <h1 className="text-white font-mono text-xl mb-5">Get in touch</h1>
          <p className='text-gray-300 font-mono'>customer@honey.com</p>
          <p className='text-gray-300 font-mono'>+9234567890</p>
        </div>
      </div>
      <div className='flex ml-5 mt-20'>
        <img src={copyrightSign} alt="copy" width={15} height={15} />
        <p className='mt-15 ml-2 text-white font-mono'> Copyright.All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer