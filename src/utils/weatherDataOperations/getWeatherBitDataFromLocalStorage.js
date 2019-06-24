const getWeatherBitDataFromLocalStorage = () => {
  const country = localStorage.getItem('WeatherBitCountry')
  const city = localStorage.getItem('WeatherBitCity')
  const temperature = localStorage.getItem('WeatherBitTemperature')
  return [country, city, temperature]
}

export default getWeatherBitDataFromLocalStorage
