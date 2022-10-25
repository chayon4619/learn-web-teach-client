import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const Course = () => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                {
                    data.map(singleData => <SingleCourse
                        key={singleData.id}
                        singleData={singleData}
                    ></SingleCourse>)
                }
            </div>

        </div>
    );
};

export default Course;