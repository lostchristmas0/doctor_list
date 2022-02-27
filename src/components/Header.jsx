import React from 'react'

function Header(props) {
  return (
    <header>
      <div className='container'>
        <h1>{props.text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Doctor List",
  bgc: '#202142',
  tc: '#FFFFFF'
}

export default Header