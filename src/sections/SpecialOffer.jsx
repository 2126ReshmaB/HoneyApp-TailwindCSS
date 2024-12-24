import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={600} height={600} className='rounded-lg shadow-lg' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-mono text-4xl lg:max-w-lg capitalize font-bold'>
          <span className='text-yellow-500'>Special</span> Offer
        </h2>
        <p className='font-mono mt-4 lg:max-w-lg info-text'>
          Indulge in the pure goodness of our premium honey with an exclusive deal you can't resist. Buy 3 jars and enjoy a <span className='text-yellow-500'>10% discount</span>, or stock up with 3 jars or more to receive 15% off along with free shipping! Experience the natural sweetness of our honey while saving more. Dont wait—this golden opportunity is available for a limited time only. Shop now and let nature sweetness brighten your day!</p>
        <div className="mt-11 flex gap-3">
          <Button label="Shop now" iconURL={arrowRight} backgroundColor="bg-yellow-500" textColor="white" borderColor="yellow-500"/>
          <Button label="Learn more" backgroundColor="bg-white" textColor="black" borderColor="black"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer