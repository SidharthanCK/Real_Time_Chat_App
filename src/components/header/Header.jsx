import React from 'react'
import "./Header.css"
function Header({auth ,user}) {
  return (
    <header>
     
        <img src='https://logodix.com/logo/722769.png' alt='' className='logo'/>
        {user&& <img className='signOut_button' src='https://icon-library.com/images/logout-icon-png/logout-icon-png-2.jpg' alt='' onClick={()=>auth.signOut()}/>}
       
     
    </header>
  )
}

export default Header
