const getLocation = () => {
  if (navigator.geolocation) {
    return new Promise(function(resolve) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          resolve({ latitude, longitude })
        },
        () => {
          alert(
            'Geolocation is disabled in your browser. In connection with this, the operation of the application will be incorrect.',
          )
          const latitude = `53.9000000`
          const longitude = `27.5666700`
          resolve({ latitude, longitude })
        },
      )
    })
  } else {
    alert('Geolocation API не поддерживается в вашем браузере')
  }
}

export default getLocation
