import axios from 'axios'

const API = 'a722e47eb8f54c5f892633b0c56ca498'

const weatherBitCustomWeather = async (latitude, longitude) => {
  try {
    const { data } = await axios.get(
      `https://api.weatherbit.io/v2.0/current?&lat=${latitude}&lon=${longitude}&key=${API}`,
    )
    return [data.data[0].country_code, data.data[0].city_name, data.data[0].temp]
  } catch (e) {
    console.log(e)
  }
}

export default weatherBitCustomWeather
