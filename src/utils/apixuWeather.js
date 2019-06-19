import axios from 'axios'

const API = 'fbf1f151228348b6bc3104348191906'

const apixuWeather = async () => {
  const latitude = localStorage.getItem('latitude')
  const longitude = localStorage.getItem('longitude')
  try {
    const { data } = await axios.get(`http://api.apixu.com/v1/current.json?key=${API}&q=${latitude},${longitude}`)
    return [data.location.country, data.location.region, data.current.temp_c]
  } catch (e) {
    console.log(e);
  }
}

export default apixuWeather
