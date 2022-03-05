import React from 'react'
import { GALLARY } from '../../keys/component-data'
import gallaryData from './gallary-data.json'
export default function Gallary({reference}) {
  return (
   <>
    <div ref={elem=>reference.current[GALLARY]=elem} className="d-flex justify-content-center flex-column align-items-center">
      <div className="h1 font-weight-bold">Gallary</div>
   <div className="row w-75 p-4 mx-0 d-flex justify-content-center">
     {gallaryData.map(({name,url},index)=>
       <div className="col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0 d-flex justify-content-center" key={index}>
          <img
            src={url}
            className="w-100 shadow-1-strong rounded mb-4"
            alt={name}
          />
     </div>
     )}
     </div>
  
</div>
   </>
  )
}

