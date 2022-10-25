import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    const { name, picture } = data
    return (
        <div>
            <section className="my-8 bg-gray-100 text-gray-900">
                <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                    <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-gray-900">Thank you for buying our premium course : <span className='text-cyan-400'>{name}</span></p>
                    <div className="flex justify-center space-x-3">
                        <img src={picture} alt="" className="w-20 h-20 bg-center bg-cover rounded-md " />
                        <div>
                            <Link className="flex items-center py-2 space-x-1 text-sm text-violet-400" to="/">
                                <span>Back To Home</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckOut;