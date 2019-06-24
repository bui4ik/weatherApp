import axios from 'axios'

const apixuWeather = async (
  latitude = localStorage.getItem('latitude'),
  longitude = localStorage.getItem('longitude'),
) => {
  try {
    const { data } = await axios.get(
      `http://api.apixu.com/v1/current.json?key=${
        process.env.REACT_APP_APIXU_API_KEY
      }&q=${latitude},${longitude}`,
    )
    return [data.location.country, data.location.region, data.current.temp_c]
  } catch (e) {
    console.log(e)
  }
}

export default apixuWeather
