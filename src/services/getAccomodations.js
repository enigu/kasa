import { useState, useEffect } from 'react'


function GetAccomodations(url) {

    useEffect(() => {
        fetch(url)
             .then((response) => response.json()
             .then(({ surveyData }) => console.log(surveyData))
             .catch((error) => console.log(error))
         )
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
