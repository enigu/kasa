import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function GetAccomodations(url) {
    const {accomodationNumber} = useParams()
    const accomodationNumberInt = parseInt(accomodationNumber)
    const prevAccomodationNumber = accomodationNumberInt === 1 ? 1 : accomodationNumberInt - 1 
    const nextQuestionNumber = accomodationNumberInt + 1 
    const [accomodationData, setAccomodationData] = useState({})
    const [error, setError] = useState(false)


    useEffect(() => {
        async function fetchAccomodations() {
            try {
                const response = await fetch(url)
                const {accomodationData} = await response.json()
                setAccomodationData(accomodationData)
            }
            catch (err) {
                console.log(err)
                setError(true)
            }
        }
        fetchAccomodations()
     }, [])

}

export default GetAccomodations



/*const GetData = async () => {
    const request = await fetch("../data/logements.json", {
        /*headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const jsonData = await request.json()
    console.log(window.location)
}

export default GetData*/
