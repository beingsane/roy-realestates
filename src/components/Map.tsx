import React, { useEffect, useState } from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"
const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyALUfmpujVPCLjcZVsZvSRjiDTHRpOBS6U&libraries=places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `600px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props: any) => (
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.long }}
  >
   
  </GoogleMap>
  )) 


  export const Map = () =>{
    const [lat, setLat] = useState<number>()
    const [long, setLong] = useState<number>()
     
     useEffect(() => {
        getCurrentLocation()
        console.log(lat, long)
     }, [])

      const getCurrentLocation = () => {
          navigator.geolocation.getCurrentPosition((pos) => {
              const {latitude: lat, longitude: long} = pos.coords
               if(lat && long){
                   setLat(lat)
                   setLong(long)
               }
          })
      }

      return (
        <MyMapComponent
          // @ts-ignore
          lat={lat}
          long = {long}
        />
      )
  }