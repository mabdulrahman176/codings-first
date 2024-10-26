import React from 'react';
import { MdOutlineContactless } from "react-icons/md";
import client from './../../assets/images/cleit.png';
import bgf from './../../assets/images/tit.png';

const clients = [
    {
        id: 1,
        no: "1",
        image: client,
        title: 'John Doe',
        description: 'Continua scale empowered metrics with cost-effective innovation.',
    },
    {
        id: 2,
        no: "2",
        image: client,
        title: 'Jane Smith',
        description: 'Continua scale empowered metrics with cost-effective innovation.',
    },
];

const FeedBack = () => {
    return (
        <div 
            className='w-full bg-white py-16 flex items-center justify-center'
            style={{
                backgroundImage: `url(${bgf})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center left',
            }}>
            <div className='flex flex-col items-center justify-center gap-4 px-4'>
                {/* Header Section */}
                <div className='text-center flex flex-col items-center justify-center space-y-6 mb-12'>
                    <div className='flex justify-center items-center font-bold text-[#C32735] text-xl gap-2 mb-4'>
                        <MdOutlineContactless size={25} />
                        <h3>Customer Feedback</h3>
                    </div>
                    <h1 className='text-4xl text-white font-bold'>What Happy Clients Say</h1>
                    <h3 className='text-[#C32735] text-2xl font-bold'>About Us</h3>
                </div>
                
                {/* Feedback Cards */}
                <div className='flex flex-col lg:flex-row gap-16 items-center'>
                    {clients.map((item) => (
                        <div 
                            key={item.id} 
                            className='bg-white rounded-lg shadow-lg w-full sm:w-[25rem] lg:w-[30rem] h-auto relative mb-8 group overflow-hidden flex flex-col sm:flex-row'>
                            
                            <div className='sm:w-1/3 w-full h-[15rem] sm:h-auto p-4 sm:p-6 flex justify-center items-center'>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className='rounded-lg object-cover w-full h-full'
                                />
                            </div>
                            
                            <div className='sm:w-2/3 w-full p-4 sm:p-6 flex flex-col justify-center relative z-10'>
                                <h2 className='text-xl font-bold mb-4 text-center sm:text-left'>{item.title}</h2>
                                <p className='text-center sm:text-left'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeedBack;
