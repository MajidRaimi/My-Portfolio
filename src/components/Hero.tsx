
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative h-screen w-full mx-auto'>
      <div className='sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 '>
        <div className='flex flex-col justify-center items-center mt-5  '>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]  animate__animated animate__fadeInDown' />
          <div className='w-1 sm:h-80 h-40 violet-gradient animate__delay-1s animate__animated animate__fadeInDown' />
        </div>
        <div>
          <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2  animate__animated animate__fadeInLeft'>Hi, I'm <span className='text-[#915EFF]'>Majid</span>👋</h1>
          <p className=' font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100 animate__animated animate__fadeInLeft animate__delay-1s'>
            I develop Web and Mobile applications <br className='sm:block hidden' /> with latest technologies and frameworks. 💪
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2'>
            <motion.div
              animate={{
                y: [0, 12, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }
              }}
              className='w-3 h-3 rounded-full p-1 bg-secondary mb-2'

            />


          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero