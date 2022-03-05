import React from 'react'
import { HOME } from '../../keys/component-data';
import './home.css';
export default function Home({reference}) {
  return (
      <>
      <div ref={elem=>reference.current[HOME]=elem} className="container d-flex justify-content-center font-weight-bold flex-column align-items-center">
         <div className='h1 text-center'>Welcome to Killer App</div>
         <p className='p-3 text-center'>
         Killer GF is a 7,777 generative portrait art collection by a former Riot Games Artist, Zeronis, with over 240 meticulously designed features that contrasts cute and aesthetically appealing girlfriends that also happen to be dangerous assassins.
         </p>
         <button className="btn btn-primary w-25" onClick={()=>alert('Under construction.')}>View on OpenSea</button>
      </div>
      <div className="home-image container d-flex justify-content-center p-4" >
          <img src="https://killergf.com/static/media/04.9b77a788.png" alt="killer"/>
      </div>
     
      </>
    
  )
}
