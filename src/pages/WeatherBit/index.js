import React from 'react'
import WeatherInfoBlock from 'components/WeatherInfoBlock'
import compareUpdateTime from 'utils/compareUpdateTime'
import setWeatherBitDataToLocalStorage from 'utils/weatherDataOperations/setWeatherBitDataToLocalStorage'
import Loading from 'components/Loading'
import weatherBitWeather from 'utils/weatherDataOperations/weatherBitWeather'
import setUserLocation from 'utils/locationDataOperations/setUserLocation'
import getWeatherBitDataFromLocalStorage from '../../utils/weatherDataOperations/getWeatherBitDataFromLocalStorage'

class WeatherBit extends React.Component {
  state = {
    country: '',
    city: '',
    temperature: '',
  }

  async componentDidMount() {
    await setUserLocation()

    const isWeatherBitDataTooOld = compareUpdateTime('WeatherBitRequestDate')

    if (isWeatherBitDataTooOld) {
      const [country, city, temperature] = await weatherBitWeather()
      setWeatherBitDataToLocalStorage(country, city, temperature)
      this.setState({ country, city, temperature })
    } else {
      const [country, city, temperature] = getWeatherBitDataFromLocalStorage()
      this.setState({ country, city, temperature })
    }
  }

  onNewCityWeatherRequest = () => {
    const [country, city, temperature] = getWeatherBitDataFromLocalStorage()
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
            getCustomWeather={weatherBitWeather}
            setWeatherDataToLocalStorage={setWeatherBitDataToLocalStorage}
            onNewCityWeatherRequest={this.onNewCityWeatherRequest}
          />
        ) : (
          <Loading />
        )}
      </>
    )
  }
}

export default WeatherBit
