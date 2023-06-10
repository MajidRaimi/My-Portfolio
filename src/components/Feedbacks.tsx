import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../animations';
import { testimonials } from '../constants';
import { TestimonialProps } from '../constants/testimonials';


const FeedbackCard: React.FC<{ index: number, testimonial: TestimonialProps }> = ({
  index, testimonial
}) => {
  return (
    <motion.div variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] mx-auto'
    >
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1 '>

        <p className='text-white tracking-wider text-[18px]'>
          {testimonial.testimonial}
        </p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col '>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {testimonial.name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {testimonial.designation} of {testimonial.company}
            </p>
          </div>

          <img src={testimonial.image} alt="" className='w-10 h-10 rounded-full object-cover'/>

        </div>
      </div>
    </motion.div>
  )
}



// eslint-disable-next-line react-refresh/only-export-components
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20-px]'>
      <div className='sm:px-16 px-6 sm:py-16 py-10 bg-tertiary rounded-xl min-h-[300px]'>
        <motion.div variants={textVariant()}>
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>What others say</p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Testimonials.</h2>
        </motion.div>
      </div>

      <div className='sm:px-16 px-6 -mt-20 pb-14 flex flex-wrap gap-7'>
        {
          testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} testimonial={testimonial} />
          ))
        }
      </div>

    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Feedbacks, '')