import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { services } from '../constants';
import { fadeIn, textVariant } from '../animations';
import { servicesProps } from '../constants/services';
import { SectionWrapper } from '../hoc';

interface ServiceCardProps {
  index: number;
  service: servicesProps
}

// eslint-disable-next-line react-refresh/only-export-components
const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  service: { title, icon }
}) => {
  return (
    <div>
      <Tilt
        className='xs:w-[250px] w-full'
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
        >

          <div

            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]  flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt="" className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] text-center cursor-default'>{title}</h3>
          </div>
        </motion.div>

      </Tilt>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]'
      >
        Hello, I'm Majid Al-Raimi, a Senior Artificial Intelligence student and an experienced web and app developer. My passion lies in harnessing the power of Artificial Intelligence and the latest tech to create innovative solutions. I have a proven track record of building dynamic, responsive websites and apps that exceed expectations. Known for my critical thinking and problem-solving skills, I strive to stay ahead of tech trends to ensure my work is future-ready. When not immersed in Artificial Intelligence projects or developing high-performing digital products, I enjoy exploring the latest tech trends and reading about space exploration. Let's connect and leverage technology for your next project!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center grow'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} service={service} />
          ))
        }
      </div>

    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, 'about')