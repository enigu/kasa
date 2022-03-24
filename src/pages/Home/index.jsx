import React from 'react'
import Banner from '../../components/banner'
import accomodation  from '../../data/logements.json'
import { Link } from 'react-router-dom'
import Thumb from '../../components/thumb'
import '../Home/home.css'

function Home() {
  //const {accomodationData, error} = GetAccomodations(`http://localhost:3000/accomodation`)
  console.log(accomodation.accomodation)

  return (
    <div className="home-container">
      <Banner />
      <div className="accomodation-container">        
        {accomodation.accomodation.map((house)=> (
          <Link key={house.id} to={`accomodation/${house.id}`} >
            <Thumb image={house.cover} title={house.title}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

