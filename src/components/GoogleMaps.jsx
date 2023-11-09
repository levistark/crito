import React from 'react'

const GoogleMaps = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7793860707923!2d18.062010500000003!3d59.336636999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1695133526980!5m2!1ssv!2sse"

  return (
    <>
        <iframe src={mapUrl} 
            width="600" 
            height="450" 
            style={{border:0}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </>
  )
}

export default GoogleMaps