import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PDFFile = () => {

    const data = useLoaderData();
    const { about, name } = data
    return (
        <div className='mx-6'>
            <p>
                {about}
            </p>
        </div>
    );
};

export default PDFFile;