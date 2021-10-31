import React from 'react';
import './Home.css'
import bannar from '../../images/Banner.jpg'
const Home = () => {
    return (
        <div className='home-page'>
            <div className='bg-dark '>
          <img className=' banner-img' src={bannar} alt="" />
      </div>
           <h1 className='mt-5'>Hello</h1>
        </div>
    );
};

export default Home;