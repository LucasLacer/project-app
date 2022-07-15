import { useEffect, useState, } from "react"
import { gql, useQuery } from "@apollo/client"
interface insertInterface {

}
const API_KEY = "AIzaSyChq2Ba1MD15U9pWN4dERLlkJBO7ztQ-Vc"
const POC_SEARCH = gql`
    query PocSearch($pocSearchLong: String!, $pocSearchLat: String!) {
    pocSearch(long: $pocSearchLong, lat: $pocSearchLat) {
      id
      status
      name
    }
  }
`
export default function Insert() {
    const [address, setAddress] = useState('')
    //lat -23.6328029
    //long -46.7018299
    const [pocSearchLat, setpocSearchLat] = useState('')
    const [pocSearchLong, setpocSearchLong] = useState('')

    const { loading, error, data} = useQuery(POC_SEARCH, {
        variables: {pocSearchLong , pocSearchLat }
    })

    function getCoordinates(address: string) {
        debugger;
        address = 'R.+Américo+Brasiliense+-+Santo+Amaro,+São+Paulo'
        if (address) {
            fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=' + API_KEY)
                .then(response => response.json())
                .then(info => {
                    if (info.resutls) {
                        setpocSearchLat(info.results[0].geometry.location.lat)
                        setpocSearchLong(info.results[0].geometry.location.lng)
                    }
                })
        }
    }

    function inputHandler(address: string) {
        
        getCoordinates(address);
        
        setpocSearchLat('-23.6328029')
        setpocSearchLong('-46.7018299')

        setAddress(address)

    }
    if (loading) return null
    if (error) return (<div><h1>error</h1></div>);
    return (
        <div>
            <input onChange={event => inputHandler(event.target.value)} value={address} placeholder="Por favor informe endereço"></input>
            <p>{data.pocSearch[0]?.id}</p>
        </div>

    )

}