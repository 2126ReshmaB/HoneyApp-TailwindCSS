import Button from "../components/Button"
import { honey8 } from "../assets/images" 

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 px-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
      <h2 className='font-mono text-4xl lg:max-w-lg capitalize font-bold'>
        We Provide You <span className='text-yellow-500'>Super  Quality</span> Honeys
            </h2>
            <p className='font-mono mt-4 lg:max-w-lg info-text'>Our super quality honeys are a testament to nature's finest craftsmanship, meticulously harvested from pristine, unpolluted landscapes. From the rich, golden hues to the irresistibly smooth texture, every drop is a celebration of authenticity and purity.</p>
            <p className='mt-6 lg:max-w-lg info-text font-mono'> We work directly with local farmers who use sustainable practices to ensure that our honey is harvested in an environmentally friendly way.</p>
            <div className="mt-11">
            <Button label="View Details" backgroundColor="bg-yellow-500" textColor="white" borderColor="yellow-500"/>
            </div>
      </div>
      <div className='flex-1 flex justify-center items-center bg-gray-100 rounded-full p-[100px]'>
        <img src={honey8} alt="honey" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality