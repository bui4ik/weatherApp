const setApixuWeatherDataToLocalStorage = (country, city, temp) => {
  localStorage.setItem('ApixuCountry', country)
  localStorage.setItem('ApixuCity', city)
  localStorage.setItem('ApixuTemp', temp)
  localStorage.setItem('ApixuRequestDate', Date.now())
}

export default setApixuWeatherDataToLocalStorage
