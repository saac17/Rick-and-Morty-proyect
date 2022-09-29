import React from 'react'

const CardActor = ({actor}) => {
  return (
        <article className='cardActor'>
            <img src={actor.image} alt="" />
            <h3 className='nameActor'>{`${actor.name}`}</h3>
            <h2 className='originActor'><span>Origin: </span>{actor.origin.name}</h2>
        </article>
    )
}

export default CardActor