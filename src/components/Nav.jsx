import {honeyLogo} from '../assets/images'
import {hamburger} from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-5 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={honeyLogo}
            alt="Logo"
            width={100}
            height={25}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li><a href='/home' className='font-mono leading-normal text-lg text-slate-gray'>Home</a></li>
          <li><a href='/home' className='font-mono leading-normal text-lg text-slate-gray'>About Us</a></li>
          <li><a href='/home' className='font-mono leading-normal text-lg text-slate-gray'>Products</a></li>
          <li><a href='/home' className='font-mono leading-normal text-lg text-slate-gray'>Connect Us</a></li>

        </ul>
        <div className='lg:hidden'>
          <img 
          src={hamburger}
          alt="Hamburger"
          width={25}
          height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav