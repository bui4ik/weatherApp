import React from 'react'
import WeatherInfoBlock from 'components/WeatherInfoBlock'
import compareUpdateTime from 'utils/compareUpdateTime'
import setApixuWeatherDataToLocalStorage from 'utils/weatherDataOperations/setApixuWeatherDataToLocalStorage'
import Loading from 'components/Loading'
import apixuCustomWeather from 'utils/weatherDataOperations/apixuCustomWeather'
import checkUserLocation from 'utils/locationDataOperations/checkUserLocation'

class ApixuWeather extends React.Component {
  state = {
    country: '',
    city: '',
    temp: '',
  }

  async componentDidMount() {
    await checkUserLocation()

    const isApixuWeatherDataTooOld = compareUpdateTime('ApixuRequestDate')

    if (isApixuWeatherDataTooOld) {
      const [country, city, temp] = await apixuCustomWeather()
      setApixuWeatherDataToLocalStorage(country, city, temp)
      this.setState({ country, city, temp })
    } else {
      this.setState({
        country: localStorage.getItem('ApixuCountry'),
        city: localStorage.getItem('ApixuCity'),
        temp: localStorage.getItem('ApixuTemp'),
      })
    }
  }

  onNewCityWeatherRequest = () => {
    this.setState({
      country: localStorage.getItem('ApixuCountry'),
      city: localStorage.getItem('ApixuCity'),
      temp: localStorage.getItem('ApixuTemp'),
    })
  }

  render() {
    const { country, city, temp } = this.state
    return (
      <>
        {country ? (
          <WeatherInfoBlock
            country={country}
            city={city}
            temp={temp}
            getCustomWeather={apixuCustomWeather}
            setWeatherDataToLocalStorage={setApixuWeatherDataToLocalStorage}
            onNewCityWeatherRequest={this.onNewCityWeatherRequest}
          />
        ) : (
          <Loading />
        )}
      </>
    )
  }
}

export default ApixuWeather
