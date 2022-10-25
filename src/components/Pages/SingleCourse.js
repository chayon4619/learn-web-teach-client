import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ singleData }) => {

    const { id, name, picture, price } = singleData

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-100 text-gray-900">
                <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-900">Price: {price}$</p>
                    </div>
                    <Link to={`/detailPage/${id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide btn btn-outline btn-info rounded-md text-gray-900">Course Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;