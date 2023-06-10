import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from '.';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../animations';

import { toast } from 'react-toastify';

interface FormProps {
  name: string;
  email: string;
  message: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const Contact: React.FC = () => {


  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormProps>({
    name: '',
    email: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    })

    console.log(form)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID as string,
      process.env.REACT_APP_TEMPLATE_ID as string,
      {
        from_name: form.name,
        to_name: 'Majid',
        from_email: form.email,
        to_email: 'majidsraimi@gmail.com',
        message: `
          Hello Majid 👋,
          I'm ${form.name} and I want contacting you from ${form.email} and I just want to say:
          ${form.message}

          Thanks,
        `
      },
      process.env.REACT_APP_PUBLIC_KEY as string
    ).then(() => {
      setIsLoading(false);
      setForm({
        name: '',
        email: '',
        message: ''
      });
      toast.dark('Your message has been sent successfully!');
    }).catch(() => {
      setIsLoading(false);
      toast.error('Something went wrong, please try again later!');
    })

  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'between', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Get in touch</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={(e) => handleSubmit(e)}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className='bg-tertiary py-4 px-6 placeholder-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className='bg-tertiary py-4 px-6 placeholder-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder-secondary text-white rounded-lg outline-none border-none font-medium resize-none	'
              required
            />
          </label>
          <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'between', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[320px] '
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Contact, 'contact')