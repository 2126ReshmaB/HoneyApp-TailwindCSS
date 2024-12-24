import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
        <h1 className='font-mono text-4xl leading-[68px] font-bold mt-5 lg:max-w-lg'>Sign Up for <span className='text-yellow-500'>Updates </span>& Newsletter</h1>
        <div className="flex items-center lg:max-w-[40%] w-full max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input type="text" placeholder="subscribe@honey.com" className="input" />
          <div className='flex items-center max-sm:justify-end max-sm:w-full'>
            <Button label="Sign Up"  backgroundColor="bg-yellow-500" textColor="white" borderColor="yellow-500" />
          </div>
        </div>
    </section>
  )
}

export default Subscribe  