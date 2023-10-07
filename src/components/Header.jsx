import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div  className='container'>
    <header className='header'>
    <div>
      <img src = "https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3828992/db24644682c364949961813c83aeb7a9/preview.png?t=1696670745824"  alt ="logo"  className='img' />
    </div>
    <div>
<ul className='list'>
    <li> Account</li>
    <li>  Home</li>
    <li> Sign-in</li>

</ul>


  
    </div>
    </header>
    </div>
  )
}

export default Header
