import axios from 'axios'
import apiKeys from 'api/apiKeys'

const apixuCustomWeather = async (
  latitude = localStorage.getItem('latitude'),
  longitude = localStorage.getItem('longitude'),
) => {
  try {
    const { data } = await axios.get(
      `http://api.apixu.com/v1/current.json?key=${apiKeys.apixuWeather}&q=${latitude},${longitude}`,
    )
    return [data.location.country, data.location.region, data.current.temp_c]
  } catch (e) {
    console.log(e)
  }
}

export default apixuCustomWeather
