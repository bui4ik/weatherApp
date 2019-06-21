const setWeatherBitDataToLocalStorage = (country, city, temp) => {
  localStorage.setItem('WeatherBitCountry', country)
  localStorage.setItem('WeatherBitCity', city)
  localStorage.setItem('WeatherBitTemp', temp)
  localStorage.setItem('WeatherBitRequestDate', Date.now())
}

export default setWeatherBitDataToLocalStorage
