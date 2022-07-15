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
    const [pocSearchLat, setpocSearchLat] = useState('-23.6328078')
    const [pocSearchLong, setpocSearchLong] = useState('-46.6996412')

    const { loading, error, data } = useQuery(POC_SEARCH, {
        variables: {pocSearchLong , pocSearchLat }
    })

    function getCoordinates(address: string) {
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
        setAddress(address)
        getCoordinates(address);
        console.log(data)
    }
    if (loading) return null
    if (error) return (<div><h1>error</h1></div>);
    return (
        <div>
            <input onChange={event => inputHandler(event.target.value)} value={address} placeholder="Por favor informe endereço"></input>
        </div>

    )

}