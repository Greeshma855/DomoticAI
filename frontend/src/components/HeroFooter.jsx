import React from 'react'
import fb30 from './assets/images/fb30.png';
import twitter30 from './assets/images/twitter30.png';
import linkedin30 from './assets/images/linkedin30.png';
import ig30 from './assets/images/ig30.png';
const HeroFooter = () => {
  return (
    <>
    <div className='flex min-h-[40vh] bg-[#CAA480] border-2 justify-evenly'>
      <div className='text-black footer-font pt-20'>
      <ul>
        <span className='text-xl font-bold uppercase'>Company</span>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Privacy Policy</li>
        <li>Affiliate Program</li>
      </ul>
      </div>
      <div className='text-black footer-font pt-20'>
      <ul>
        <span className='text-xl font-bold uppercase'>Get Help</span>
        <li>FAQ</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Order Status</li>
      </ul>
      </div>
      <div className='text-black footer-font pt-20'>
      <span className='text-xl font-bold uppercase'>Follow Us</span>
      <ul className='flex flex-row justify-evenly'>
        <li><img src={fb30} alt="fb" className='p-2'/></li>
        <li><img src={ig30} alt="ig" className='p-2'/></li>
        <li><img src={twitter30} alt="twitter" className='p-2'/></li>
        <li><img src={linkedin30} alt="linkedin" className='p-2'/></li>
      </ul>
      </div> 
    </div>
    </>
  )
}

export default HeroFooter;
