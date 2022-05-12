import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import HomeButton from './Shared/HomeButton';


const HomePageAppointment = () => {
    return (
       <section
      style={{
          background:`url(${appointment})`
      }}
       className='flex justify-center items-center'>
           <div className="flex-1">
                <img className='mt-[-150px]  hidden lg:block' src={doctor} alt="" />
           </div>
           <div className="flex-1 text-white px-5">
            <h2 className='text-primary text-xl font-bold py-2'>Appointment</h2>
            <h1 className='text-3xl font-bold py-5'>Make an Appointment Today</h1>
            <p  className='py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <HomeButton>Get Started</HomeButton>
           </div>
       </section>
    );
};

export default HomePageAppointment;