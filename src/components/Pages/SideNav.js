import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ d }) => {
    const { id, name } = d;
    return (
        <div>
            <div className='ml-4'>
                <Link to={`/detailPage/${id}`}><button className="btn btn-active btn-link">{name}</button></Link>
            </div>
        </div>
    );
};

export default SideNav;