import React from 'react'

const CardInfoActor = ({setMoreInfoActor, infoCompActor}) => {
    const back = () => {
        setMoreInfoActor(false)
    }

  return (
    <article className='cardInfo'>
        <img src={infoCompActor?.image} alt="" />
        <ul className='listInfo'>
            <li><span>Name: </span>{infoCompActor?.name}</li>
            <li><span>Gender: </span>{infoCompActor?.gender}</li>
            <li><span>Status: </span>{infoCompActor?.status}</li>
            <li><span>Specie: </span>{infoCompActor?.species}</li>
            <li><span>Location: </span>{infoCompActor?.location.name}</li>
            <li><span>Origin: </span>{infoCompActor?.origin.name}</li>
            <li ><i className='bx bx-rewind bx-sm' onClick={back}>Init</i></li>
        </ul>
    </article>
  )
}

export default CardInfoActor