import { motion } from 'framer-motion';

const SectionWrapper = (Component: React.ElementType, idName: string) => {
  const HOC = () => {
    return (
      <motion.section
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
            },
          },
        }}
        initial='hidden'
        whileInView='show'
        viewport={{
          once: true, amount: 0.25
        }}
        className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0'
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  }
  return HOC;
}



export default SectionWrapper;
