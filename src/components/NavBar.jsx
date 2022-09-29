import React from 'react'

const NavBar = ({handleSubmit}) => {
  return (
    <div className='NavBar'>
        <h1 className='title'>Rick and Morty</h1>
        <form onSubmit={handleSubmit}>
            <input id='search' type="text" className='inputSearch'/>
            <button className='buttonSearch'><i class='bx bx-tada-hover bx-border bx-search-alt'></i></button>
        </form>
    </div>
  )
}

export default NavBar