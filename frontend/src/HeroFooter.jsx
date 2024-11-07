import React from 'react'
import fb30 from './assets/images/fb30.png';
import twitter30 from './assets/images/twitter30.png';
import linkedin30 from './assets/images/linkedin30.png';
import ig30 from './assets/images/ig30.png';
const HeroFooter = () => {
  return (
    <>
    {/* <div className='flex min-h-[40vh] bg-[#CAA480] border-2 justify-evenly'> */}
    <div className='flex min-h-[40vh] bg-[#113034] border-2 justify-evenly'>
      <div className='text-[#fbf7f0] footer-font pt-20'>
      <ul>
        <span className='text-xl font-bold uppercase'>Company</span>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Privacy Policy</li>
        <li>Affiliate Program</li>
      </ul>
      </div>
      <div className='text-[#fbf7f0] footer-font pt-20'>
      <ul>
        <span className='text-xl font-bold uppercase'>Get Help</span>
        <li>FAQ</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Order Status</li>
      </ul>
      </div>
      <div className='text-[#fbf7f0] footer-font pt-20'>
      <span className='text-xl font-bold uppercase'>Follow Us</span>
      <ul className='flex flex-row justify-evenly'>
        <li className="mx-1"><img src={fb30} alt="fb" className='p-2 bg-[#fbf7f0] rounded-full  '/></li>
        <li className="mx-1"><img src={ig30} alt="ig" className='p-2 bg-[#fbf7f0] rounded-full  '/></li>
        <li className="mx-1"><img src={twitter30} alt="twitter" className='p-2 bg-[#fbf7f0] rounded-full  '/></li>
        <li className="mx-1"><img src={linkedin30} alt="linkedin" className='p-2 bg-[#fbf7f0] rounded-full  '/></li>
      </ul>
      </div> 
    </div>
    </>
  )
}

export default HeroFooter;
