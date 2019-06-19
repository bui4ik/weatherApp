const getLocation = () => {
  if (navigator.geolocation) {
    return new Promise( function(resolve) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        resolve ({latitude,longitude})
    })
    })
  } else {
    alert('Geolocation API не поддерживается в вашем браузере')
  }
}

export default getLocation

