import React from 'react'
import './SidebarOption.css';


function SidebarOption({ title, Icon }) {
  return (
    // Sidebar Menu Item Layout
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p> }     
    </div>
  )
}

export default SidebarOption
