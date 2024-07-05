import React from 'react';
import './header.css';

const Header = () => {
   return (
      <>
         <section className="header">
            <div className='topHeader'>
               <div className='leftAlign'>
                  <div className='zImage' />
                  <span className='zWords'>ani.co</span>
               </div>
               <div className='linksAlignedRight'>
                  <div className='links'>
                     <span className='home'>Home</span>
                     <span className='about-7b'>About</span>
                     <span className='services-7c'>Services</span>
                     <span className='features'>Features</span>
                     <span className='contact-us-7d'>Contact Us</span>
                  </div>
               </div>
               <div className='flex-row-b'>
                  <div className='hero-section-image' />
                  <div className='header-body-text-buttons'>
                     <div className='header-body-text'>
                        <div className='header-text'>
                           <div className='stay-jiggy-insured'>
                              <span className='stay'>Stay </span>
                              <span className='jiggy'>Jiggy</span>
                              <span className='while-we-get-you'> </span>
                              <span className='stay-7e'>While We Get You </span>
                              <span className='while-we-get-you-7f'>Insured</span>
                           </div>
                        </div>
                        <div className='zani-co-insurance-policy-80'>
                           <span className='frame-81'>
                              Zani.co ensures her customers a good insurance policy to
                              protect them against risk inturn for regular payment of
                              premium.
                           </span>
                        </div>
                     </div>
                     <div className='box-1f'>
                        <div className='button-82'>
                           <span className='get-started'>Get Started</span>
                        </div>
                        <button className='button-83'>
                           <span className='learn-more'>Learn more</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section >
      </>
   );
};

export default Header;