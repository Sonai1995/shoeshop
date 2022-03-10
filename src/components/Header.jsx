import React from 'react'

const Header = () => {
  return (
    <>
      <div className="page">
        <nav className="page__menu menu">
          <ul className="menu__list r-list">
            <li className="menu__group"><a href="/" className="menu__link r-link text-underlined">My Shoe Shop</a></li>
            {/*<li className="menu__group"><input type="text" style={{marginTop:'2%', marginLeft:'100%', width:'444px', height:'36px'}} /></li>*/}
          </ul>
        </nav>  
      </div>
    </>
  )
}

export default Header