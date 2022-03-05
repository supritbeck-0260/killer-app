import React from 'react';
import navData from './nav-data';
import './nav-bar.css'
import NavItem from './NavItem';
import socialMediaLinks from './social-media-links';
export default function NavBar({scrollToView}) {
  return (
      <>
        <div className="row mx-0 py-2 nav-bar">
          <div className="h2 col-4 brand">Killer App</div>
          <div className="col-4 d-flex flex-row justify-content-between">
             {navData.map(({name,id})=><NavItem scrollToView={scrollToView} name={name} id={id} key={id}/>)}
          </div>
          <div className="col-4 d-flex justify-content-center">
            {
              socialMediaLinks.map(({url,name},index)=>
              <img src={url} key={index} className='mx-2' width={20} height={20} alt={name}/>
              )
            }
         
          </div>
        </div>
      </>
   
  )
}
