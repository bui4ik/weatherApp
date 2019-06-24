const getApixuWeatherDataFromLocalStorage = () => {
  const country = localStorage.getItem('ApixuCountry')
  const city = localStorage.getItem('ApixuCity')
  const temperature = localStorage.getItem('ApixuTemperature')
  return [country, city, temperature]
}

export default getApixuWeatherDataFromLocalStorage
