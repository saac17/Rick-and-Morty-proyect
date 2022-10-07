import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import CardActor from './components/CardActor'
import NavBar from './components/NavBar'
import Loading from './components/Loading'
import CardInfoActor from './components/CardInfoActor'

function App() {
  const [character, setCharacter] = useState()
  const [inputSearch, setInputSearch] = useState('')

  useEffect(() => {
    let URL
    if (inputSearch) {
      URL = `https://rickandmortyapi.com/api/character/?name=${inputSearch}`
    } else {
      URL = 'https://rickandmortyapi.com/api/character/'
    }

    axios.get(URL)
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err))
  }, [inputSearch])

  const handleSubmit = e => {
    e.preventDefault()
    setInputSearch(e.target.search.value)
  }
  const [infoCompActor, setInfoCompActor] = useState()
  const [moreInfoActor, setMoreInfoActor] = useState(false)
  const moreInfo = (id) => {
    setMoreInfoActor(true)

    const URL = `https://rickandmortyapi.com/api/character/${id}`

      axios.get(URL)
        .then(res => setInfoCompActor(res.data))
        .catch(err => console.log(err))
  }
  

  return (
    <div className="App" >
      {
        character ?
          <div>
            <NavBar
              handleSubmit={handleSubmit} 
              moreInfoActor={moreInfoActor}
            />
            
            {
              moreInfoActor ?
              <div className='cardMoreInfo'>
               <CardInfoActor 
                setMoreInfoActor={setMoreInfoActor}
                infoCompActor={infoCompActor}
              /> 
              </div>
              
            :
            <div className='card'>
              {
                character?.results.map(actor => (
                  <CardActor 
                    key={`${actor.created}`}
                    actor={actor}
                    moreInfo={moreInfo}
                  />
                ))
              }
            </div>  
            }
            
          </div>
        :
          <Loading/>
      }
    </div>
  )
}

export default App
