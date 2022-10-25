import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from './SideNav';
import SingleCourse from './SingleCourse';

const Course = () => {
    const data = useLoaderData();
    return (
        <div className='grid lg:grid-cols-10 gap-4'>
            <div className='py-16'>
                {
                    data.map(d => <SideNav
                        key={d.id}
                        d={d}
                    ></SideNav>)
                }
            </div>
            <div className='px-4 py-16 col-span-9 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                    {
                        data.map(singleData => <SingleCourse
                            key={singleData.id}
                            singleData={singleData}
                        ></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;