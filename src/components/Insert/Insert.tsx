import { useState } from "react"
interface insertInterface {

}
const API_KEY="AIzaSyChq2Ba1MD15U9pWN4dERLlkJBO7ztQ-Vc"

export default function Insert() {
    const [address, setAddress] = useState()

    function getLatiLong() {
        console.log("test");
    }

    function getCoordinates(address:String){
        address=  "Rua Américo Brasiliense, São Paulo"
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key='+API_KEY)
          .then(response => response.json())
          .then(data => {
            const latitude = data.results[0].geometry.location.lat;
            const longitude = data.results[0].geometry.location.lng;
            console.log({latitude, longitude})
          })
      }
    return (
        <div>
            <input onBlur={() => getCoordinates("Rua Américo Brasiliense, São Paulo")} value={address} placeholder="Por favor informe endereço"></input>
        </div>
    )

}