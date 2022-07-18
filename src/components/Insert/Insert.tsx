import { useState, } from "react"
import { gql, useQuery } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { Input } from "./Styles"

//Query to find distributor
const POC_SEARCH = gql`
    query PocSearch($pocSearchLong: String!, $pocSearchLat: String!) {
    pocSearch(long: $pocSearchLong, lat: $pocSearchLat) {
      id
      status
      name
    }
  }
`

interface coordinates {
    latitute: string,
    longitude: string
}


export default function Insert() {
    const navigate = useNavigate();
    const [address, setAddress] = useState('')
    //lat -23.6328029
    //long -46.7018299
    const [pocSearchLat, setpocSearchLat] = useState('')
    const [pocSearchLong, setpocSearchLong] = useState('')

    const { loading, error, data } = useQuery(POC_SEARCH, {
        variables: { pocSearchLong, pocSearchLat }
    })

    //Once the data is loaded with distruitor info go to products page
    if (data?.pocSearch.length) {
        navigate('./products', { state: { vendorId: data.pocSearch[0]?.id } })
    }

    async function getCoordinates(address: string) {
        let lat
        let long
        if (address) {
            address = 'R.+Américo+Brasiliense+-+Santo+Amaro,+São+Paulo'
            if (address) {
                fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=AIzaSyChq2Ba1MD15U9pWN4dERLlkJBO7ztQ-Vc')
                    .then(response => response.json())
                    .then(info => {
                        if (info.resutls) {
                            //Problem with google API returned address if diferente from the on used on pocSearch
                            lat = '-23.6328029'
                            long = '-46.7018299'
                        }
                    })
            }
            return { latitude: lat, longitude: long }
        }
    }

    //Function that receives address and gets coordinates usin maps API
    async function inputHandler(address: string) {

        const orientation = await getCoordinates(address) as unknown as coordinates
        setpocSearchLat('-23.6328029')
        setpocSearchLong('-46.7018299')

        setAddress(address)
    }
    if (loading) return <h1>Carregando</h1>
    if (error) return (<div><h1>Error</h1></div>);
    return (
        <div>
            <Input onChange={event => inputHandler(event.target.value)} value={address} placeholder="Por favor informe seu endereço."></Input>
        </div>

    )

}