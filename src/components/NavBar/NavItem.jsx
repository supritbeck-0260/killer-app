import React from 'react'

export default function NavItem({name,id,scrollToView}) {
  return (
    <div className='pointer h5' onClick={()=>scrollToView(id)}>{name}</div> 
  )
}
