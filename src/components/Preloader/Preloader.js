import React from 'react';
import Loader from '../../img/loader.svg';
import './Preloader.css';

const Preloader = () => {

    return (

        <div className="preloader">

            <img src={Loader} alt="" />
            
        </div>
    );
};

export default Preloader;