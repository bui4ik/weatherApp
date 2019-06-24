const setLocationDataToLocalStorage = (latitude, longitude) => {
  localStorage.setItem('latitude', latitude)
  localStorage.setItem('longitude', longitude)
  localStorage.setItem('locationLastUpdatedTime', Date.now())
}

export default setLocationDataToLocalStorage
