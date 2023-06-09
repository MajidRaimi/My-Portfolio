import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../animations';
import { experiencesProps } from '../constants/experinces';

interface ExperienceCardProps {
  experience: experiencesProps
}


// eslint-disable-next-line react-refresh/only-export-components
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience
}) => {
  return (
    <VerticalTimelineElement contentStyle={{
      background: '#1d1836', color: '#fff'
    }}
      contentArrowStyle={{
        borderRight: '7px solid  #232631'
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg, color: '#fff'
      }}
      icon={
        <div className='flex items-center justify-center h-full'>
          <img src={experience.icon} alt="" className='w-[60%] h-[60%] object-contain' />
        </div>
      }
    >

      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{
          margin: 0
        }}>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className='text-white-100 text-[14px] tracking-wider'>
              {point}
            </li>
          ))
        }
      </ul>

    </VerticalTimelineElement>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>

        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>What I have done so far?</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Work Experience.</h2>


      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))
          }
        </VerticalTimeline>
      </div>

    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Experience, 'work')