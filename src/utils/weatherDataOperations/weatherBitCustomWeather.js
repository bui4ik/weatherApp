import axios from 'axios'
import apiKeys from 'api/apiKeys'

const weatherBitCustomWeather = async (
  latitude = localStorage.getItem('latitude'),
  longitude = localStorage.getItem('longitude'),
) => {
  try {
    const { data } = await axios.get(
      `https://api.weatherbit.io/v2.0/current?&lat=${latitude}&lon=${longitude}&key=${
        apiKeys.weatherBit
      }`,
    )
    return [data.data[0].country_code, data.data[0].city_name, data.data[0].temp]
  } catch (e) {
    console.log(e)
  }
}

export default weatherBitCustomWeather
