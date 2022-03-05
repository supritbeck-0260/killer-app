import React from 'react'

export default function NavItem({name,id,scrollToView}) {
  return (
    <li className="nav-item active px-2 pointer"  onClick={()=>scrollToView(id)}>
    <span className='nav-link'>{name}</span> 
  </li>
  )
}
