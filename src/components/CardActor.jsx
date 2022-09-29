import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardInfoActor from './CardInfoActor'

const [infoActor, setInfoActor] = useState()
const URL = `${actor.url}`

useEffect(() => {
  axios.get(URL)
  .then(res => setInfoActor(res.data))
  .catch(err => console.log(err))
}, [])


const CardActor = ({actor}) => {
  return (
        <article className='cardActor'>
            <img src={actor.image} alt="" />
            <h3 className='nameActor'>{`${actor.name}`}</h3>
            <h2 className='originActor'><span>Origin: </span>{actor.origin.name}</h2>
            <a href=<CardInfoActor/> >More info</a>
        </article>
    )
}

export default CardActor