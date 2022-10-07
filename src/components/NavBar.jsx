import React from 'react'

const NavBar = ({handleSubmit, moreInfoActor}) => {
  return (
    <div className='NavBar'>
        <h1 className='title'>Rick and Morty</h1>
        {
          moreInfoActor ?
            ''
          :
            <form onSubmit={handleSubmit}>
              <input id='search' type="text" className='inputSearch'/>
              <button className='buttonSearch'><i className='bx bx-tada-hover bx-border bx-search-alt'></i></button>
            </form>
        }
        
    </div>
  )
}

export default NavBar