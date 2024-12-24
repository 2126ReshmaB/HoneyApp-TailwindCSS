import Button from "../components/Button";
import {arrowRight} from "../assets/icons";
import {honey1, honey2, honey3} from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {

  const [bigShoeImage,setBigShoeImg] = useState(honey1);

  const handleClick = (bigShoe) => {
    setBigShoeImg(bigShoe);
  }

  return (
    <section id="home" className='w-full flex justify-center xl:flex-row flex-col min-h-screen gap-10'>
        <div className='relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
            <h1 className='mt-3 font-mono text-[50px] max-sm:text-[45px] max-sm:leading-[82] font-bold'>
              <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Pure, Natural, Golden Delight</span>
              <br />
              – From <span className='text-yellow-500 inline-block mt-1'>Hive</span> to your Home
            </h1>
            <p className='font-mono text-slate-gray leading-8 mt-6 mb-14'>Discover the <span className='text-yellow-500'>finest honey</span>, sourced sustainably and packed with nature's goodness.</p>
            <Button label="Shop now" iconURL={arrowRight} backgroundColor="bg-yellow-500" textColor="white" borderColor="yellow-500"/>
            <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-16'>
              <div>
                <p className='hero'>1K+</p>
                <p className='leading-7 font-mono text-slate-gray'>BeeKeepers</p>
              </div>
              <div>
                <p className='hero'>800+</p>
                <p className='leading-7 font-mono text-slate-gray'>Bee Hives</p>
              </div>
              <div>
                <p className='hero'>100K+</p>
                <p className='leading-7 font-mono text-slate-gray'>Customers</p>
              </div>
            </div>
        </div>
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gradient-to-r from-yellow-100 to-yellow-300  bg-cover bg-center'>
          <img src={bigShoeImage} alt="shoe collection" width={410} height={300} className='object-contain relative z-10' />
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            <div onClick={() => handleClick(honey1)}>
              <ShoeCard 
              imgURL={honey1} 
              bigShoeImg={bigShoeImage}
              />
            </div>
            <div onClick={() => handleClick(honey2)}>
              <ShoeCard 
              imgURL={honey2} 
              bigShoeImg={bigShoeImage}
              />
            </div>
            <div onClick={() => handleClick(honey3)}>
              <ShoeCard 
              imgURL={honey3} 
              bigShoeImg={bigShoeImage}
              />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero;