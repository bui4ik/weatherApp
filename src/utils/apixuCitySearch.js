import axios from 'axios'

const apixuCitySearch = async value => {
  try {
    const { data } = await axios.get(
      `http://api.apixu.com/v1/search.json?key=${process.env.REACT_APP_APIXU_API_KEY}&q=${value}`,
    )
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

export default apixuCitySearch
