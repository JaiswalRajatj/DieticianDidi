/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: About.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import { memoji, introduction } from '../Constants/constants';
import ImageSlider from '../Components/elements/ImageSlider';

const About = () => (
  <div id='about' className='w-full flex justify-center overflow-hidden-web'>
    <div className='w-full xl:w-[70%] flex flex-col pb-16'>
      <div className='w-full'>
        <SectionTitle title='ABOUT ME' subtitle='Introduction' />
      </div>
      <div className='w-full flex flex-col-reverse sm:flex-row'>
        <div className='w-full md:w-[50%] md:h-full flex items-center mt-100'>
          <LazyMotion features={domAnimation} strict>
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className='text-grayscale-50 p-6 text-center flex flex-col gap-5'
            >
              <span className='text-primary-400' style={{ fontSize: '1.2em', fontWeight: '900' }}>{introduction.text[0]}</span>
              <span className='text-primary-500' style={{ fontSize: '0.95em', fontWeight: '500' }}>{introduction.text[1]}</span>
              <span className='text-primary-500' style={{ fontSize: '0.95em', fontWeight: '500' }}>{introduction.text[2]}</span>
              <span className='text-primary-500' style={{ fontSize: '0.95em', fontWeight: '500' }}>{introduction.text[3]}</span>
            </m.p>
          </LazyMotion>
        </div>
        <div className='w-full md:w-[50%] flex h-full items-center justify-center flex-col'>
          <div className='w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center'>
            <ImageSlider images={memoji.image} />
          </div>
          <div className='flex gap-4 justify-center mt-4'>
            <a href='/' target='_blank' rel='noopener noreferrer' className='rounded-full bg-[#FF0000] w-12 h-12 flex items-center justify-center shadow hover:scale-110 transition-transform'>
              <i className='fab fa-youtube text-white text-2xl' />
            </a>
            <a href='https://www.instagram.com/weight_loss_time_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel='noopener noreferrer' className='rounded-full bg-white w-12 h-12 flex items-center justify-center shadow hover:scale-110 transition-transform'>
              {/* <img src='https://i.pinimg.com/originals/25/70/7f/25707f8e2e7e2e7e2e7e2e7e2e7e2e7e.png' alt='Instagram' style={{ width: '28px', height: '28px', borderRadius: '50%' }} /> */}
              {/* <i className='fab fa-instagram text-black text-2xl' /> */}
              <img
                src="https://i.pinimg.com/1200x/fa/10/e5/fa10e540662fb027b6dc9311836232c7.jpg"
                alt="Instagram"
                width="32"
                height="32"
                style={{
                  objectFit: 'contain',
                 }}
                
              />
            </a>
            <a href='https://www.linkedin.com/in/dt-praveena-mishra-b35bb3228/' target='_blank' rel='noopener noreferrer' className='rounded-full bg-[#0077b5] w-12 h-12 flex items-center justify-center shadow hover:scale-110 transition-transform'>
              <i className='fab fa-linkedin-in text-white text-2xl' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=919244955968&text=%F0%9F%91%8B%20Hi!%20I%E2%80%99m%20Dt.%20Praveena%20Mishra%20%E2%80%94%20a%20Clinical%20Dietitian%20with%205%2B%20years%20of%20experience%20and%201%2C000%2B%20clients%20served%20across%20India.%0A%0AI%20specialize%20in%20creating%20diet%20plans%20that%20are%3A%0A%E2%9C%85%20Realistic%0A%E2%9C%85%20Region-specific%0A%E2%9C%85%20Tailored%20to%20your%20goals%2C%20lifestyle%20%26%20medical%20needs%0A%0ANo%20crash%20diets.%20No%20boring%20food.%20Just%20practical%2C%20science-backed%20nutrition%20that%20works%20for%3A%0A-%20Weight%20loss%0A-%20PCOS%20%2F%20Thyroid%0A-%20Diabetes%0A-%20Muscle%20gain%0A%0A%F0%9F%8D%BD%EF%B8%8F%20Choose%20a%20service%20by%20replying%20with%20the%20number%3A%0A%0A1%EF%B8%8F%E2%83%A3%20Monthly%20Plan%0A2%EF%B8%8F%E2%83%A3%20Quarterly%20Plan%0A3%EF%B8%8F%E2%83%A3%20Yearly%20Plan%0A4%EF%B8%8F%E2%83%A3%20Corporate%20Wellness%0A5%EF%B8%8F%E2%83%A3%20Hospital%20Collaboration%0A%0ALet%E2%80%99s%20make%20your%20health%20journey%20personal%2C%20sustainable%20%26%20delicious%20%F0%9F%92%9A' target='_blank' rel='noopener noreferrer' className='rounded-full bg-[#25D366] w-12 h-12 flex items-center justify-center shadow hover:scale-110 transition-transform'>
              <i className='fab fa-whatsapp text-white text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
