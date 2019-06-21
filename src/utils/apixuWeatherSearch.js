import axios from 'axios'

const API = 'fbf1f151228348b6bc3104348191906'

const apixuWeatherSearch = async value => {
  try {
    const { data } = await axios.get(`http://api.apixu.com/v1//search.json?key=${API}&q=${value}`)
    return data.map(({ name, lat, lon, id }) => ({
      value: id,
      label: name,
      latitude: lat,
      longitude: lon,
    }))
  } catch (e) {
    console.log(e)
  }
}

export default apixuWeatherSearch
