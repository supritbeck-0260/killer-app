import React from 'react';
import navData from './nav-data';
import './nav-bar.css'
import NavItem from './NavItem';
import socialMediaLinks from './social-media-links';
export default function NavBar({scrollToView}) {
  return (
      <>
        <nav className="navbar navbar-expand-lg row mx-0 px-3">
          <h1 className="navbar-brand h1 brand col-4 px-2 mx-0" >Killer App</h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-8 px-0 row mx-0" id="navbarNav">
            <ul className="navbar-nav col-8">
            {navData.map(({name,id})=><NavItem scrollToView={scrollToView} name={name} id={id} key={id}/>)}
            </ul>
            <div className="col-4 d-flex justify-content-end px-3 mx-0">
            {socialMediaLinks.map(({url,name},index)=>
              <img src={url} key={index} className='mx-2 pointer' onClick={()=>alert('under construction.')} width={20} height={20} alt={name}/>
                    
              )} 
              </div>
          </div>
        </nav>
      </>
   
  )
}
