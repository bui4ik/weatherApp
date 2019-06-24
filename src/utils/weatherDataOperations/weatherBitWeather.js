import axios from 'axios'

const weatherBitWeather = async (
  latitude = localStorage.getItem('latitude'),
  longitude = localStorage.getItem('longitude'),
) => {
  try {
    const { data } = await axios.get(
      `https://api.weatherbit.io/v2.0/current?&lat=${latitude}&lon=${longitude}&key=${
        process.env.REACT_APP_WEATHERBIT_API_KEY
      }`,
    )
    return [data.data[0].country_code, data.data[0].city_name, data.data[0].temp]
  } catch (e) {
    console.log(e)
  }
}

export default weatherBitWeather
