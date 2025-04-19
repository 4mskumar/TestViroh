import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef()

    const handleEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_v923j7b',
            'template_mw0g7b2',
            form.current,
            {
              publicKey: 'ucw1cGt-BkL4zgxhQ',
            }
          )
          
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }

  return (
    <>
    <h1 className='text-4xl font-dm font-semibold tracking-tight text-navy/90'>Working Together To Make Diffrence</h1>
    <form ref={form} onSubmit={handleEmail} className='mt-4 flex flex-col gap-4'>
        <input type="text" className='w-full bg-slate-200/80 outline-none rounded-lg placeholder:text-navy font-inter py-3 pl-5 text-black' placeholder='Name' name="userName" id="" />
        <input type="email" className='w-full bg-slate-200/80 outline-none rounded-lg placeholder:text-navy font-inter py-3 pl-5 text-black' placeholder='Email' name="userEmail" id="" />
        <input type="text" className='w-full bg-slate-200/80 outline-none rounded-lg placeholder:text-navy font-inter py-3 pl-5 text-black' placeholder='Mobile No' name="userMobile" id="" />
        <input type="text" className='w-full bg-slate-200/80 outline-none rounded-lg placeholder:text-navy font-inter py-3 pl-5 text-black' placeholder='How can we help you?' name="subject" id="" />
        <textarea name="body" style={{backgroundColor: 'rgb(226, 232, 240 / 0.8)'}} className='resize-none text-black outline-none bg-slate-200/80 px-5 py-3 rounded-lg w-full h-32 placeholder:text-navy placeholder:italic' placeholder='Write your message' id=""></textarea>
        <input type="submit" className='bg-mustard hover:bg-yellow-600 duration-300 transition-colors text-white font-inter tracking-tighter font-semibold px-5 py-3 w-fit rounded-lg cursor-pointer' value={'SEND MESSAGE'} />
    </form>
    </>
  )
}

export default Form