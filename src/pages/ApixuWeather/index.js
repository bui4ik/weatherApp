import React from 'react'
import WeatherInfoBlock from 'components/WeatherInfoBlock'
import compareUpdateTime from 'utils/compareUpdateTime'
import setApixuWeatherDataToLocalStorage from 'utils/weatherDataOperations/setApixuWeatherDataToLocalStorage'
import Loading from 'components/Loading'
import apixuWeather from 'utils/weatherDataOperations/apixuWeather'
import setUserLocation from 'utils/locationDataOperations/setUserLocation'
import getApixuWeatherDataFromLocalStorage from 'utils/weatherDataOperations/getApixuWeatherDataFromLocalStorage'

class ApixuWeather extends React.Component {
  state = {
    country: '',
    city: '',
    temperature: '',
  }

  async componentDidMount() {
    await setUserLocation()

    const isApixuWeatherDataTooOld = compareUpdateTime('ApixuRequestDate')

    if (isApixuWeatherDataTooOld) {
      const [country, city, temperature] = await apixuWeather()
      setApixuWeatherDataToLocalStorage(country, city, temperature)
      this.setState({ country, city, temperature })
    } else {
      const [country, city, temperature] = getApixuWeatherDataFromLocalStorage()
      this.setState({ country, city, temperature })
    }
  }

  onNewCityWeatherRequest = () => {
    const [country, city, temperature] = getApixuWeatherDataFromLocalStorage()
    this.setState({ country, city, temperature })
  }

  render() {
    const { country, city, temperature } = this.state
    return (
      <>
        {country ? (
          <WeatherInfoBlock
            country={country}
            city={city}
            temperature={temperature}
            getCustomWeather={apixuWeather}
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
