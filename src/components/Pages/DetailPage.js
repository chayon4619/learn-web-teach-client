import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailPage = () => {
    const data = useLoaderData()
    const { id, name, picture, about, price } = data
    return (
        <div className='mb-12 mt-6 flex justify-center'>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-200 text-gray-900">
                <div className="flex space-x-4">
                    <div className="flex flex-col space-y-1">
                        <Link to="/" className="text-3xl font-semibold">{name}</Link>
                    </div>
                </div>
                <div>
                    <img src={picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-3xl font-bold">{name}</h2>
                    <p className="text-sm text-gray-900">{about}</p>
                </div>
                <p className='text-2xl font-bold'>Price : {price}$</p>
                <div className='flex justify-around'>
                    <button className="btn btn-outline">DownLoad Pdf</button>
                    <Link to={`/checkout/${id}`}>
                        <button className="btn btn-outline btn-secondary">Purchase Now</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default DetailPage;