import { assets } from "../assets/assets"

const About = () => {
  return (
    <div>

      <div className='pt-10 text-2xl text-center text-gray-500'>
      <p>ABOUT <span className='font-medium text-gray-700'>US</span></p>
      </div>

      <div className='flex flex-col gap-12 px-10 mx-10 my-10 md:flex-row '>
        <img className='w-full md:max-w-[300px]' src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 pr-10 text-gray-600 md:w-3/4">
          <p >Welcome to MediConnect, your trusted partner in managing your healthcare needs conveniently and 
            efficiently. At MediConnect, we understand the challenges individuals face when it comes to 
            scheduling doctor appointments and managing their health records.</p>

          <p>MediConnect is committed to excellence in healthcare technology. We continuously strive to enhance our platform, 
            integrating the latest advancements to improve user experience and deliver superior service. 
            Whether you're booking your first appointment or managing ongoing care, MediConnect is here to 
            support you every step of the way.</p>

          <b className="text-gray-800">Our Vision</b>
          
          <p>our vision at MediConnect is to create a seamless healthcare experience for every user. 
            We aim to bridge the gap between patients and healthcare providers, making it easier for you to 
            access the care you need, when you need it.</p>

        </div>
      </div>
     
     <div className='px-10 mx-10'>
     <div className='my-4 text-xl'>
      <p>WHY <span className="font-semibold text-gray-700">CHOOSE US</span></p>
     </div>
     
     <div className='flex flex-col mb-20 md:flex-row'>
      
      <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>EFFICIENCY</b>
        <p>Stremed Appointment Scheduling <br /> That Fits into Your Busy Lifestyle.</p>
      </div>
      
      <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>CONVENIENCE</b>
        <p>Access To A Network Of Trusted <br /> Healthcare Professionals in Your Area.</p>
      </div>
      
      <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>PERSONALIZATION</b>
        <p>Tailored Recomendations And Remainders <br/> To Help You Stay On Top Of Your Health</p>
      </div>
      
     </div>
     </div>
     </div> 
  )
}

export default About
