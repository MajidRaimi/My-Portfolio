import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn } from '../animations';
import { motion } from 'framer-motion';

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 items-center text-center'>
      {
        technologies.map((tech, index) => (
          <motion.div key={tech.name} className='w-28 h-28 mx-auto' variants={fadeIn('right', '', index*0.05, 1)}>
            <BallCanvas icon={tech.icon} />
          </motion.div>
        ))
      }
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, '')