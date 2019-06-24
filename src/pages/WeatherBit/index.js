import React from 'react'
import WeatherInfoBlock from 'components/WeatherInfoBlock'
import compareUpdateTime from 'utils/compareUpdateTime'
import setWeatherBitDataToLocalStorage from 'utils/weatherDataOperations/setWeatherBitDataToLocalStorage'
import Loading from 'components/Loading'
import weatherBitCustomWeather from 'utils/weatherDataOperations/weatherBitCustomWeather'
import checkUserLocation from 'utils/locationDataOperations/checkUserLocation'

class WeatherBit extends React.Component {
  state = {
    country: '',
    city: '',
    temp: '',
  }

  async componentDidMount() {
    await checkUserLocation()

    const isWeatherBitDataTooOld = compareUpdateTime('WeatherBitRequestDate')

    if (isWeatherBitDataTooOld) {
      const [country, city, temp] = await weatherBitCustomWeather()
      setWeatherBitDataToLocalStorage(country, city, temp)
      this.setState({ country, city, temp })
    } else {
      this.setState({
        country: localStorage.getItem('WeatherBitCountry'),
        city: localStorage.getItem('WeatherBitCity'),
        temp: localStorage.getItem('WeatherBitTemp'),
      })
    }
  }

  onNewCityWeatherRequest = () => {
    this.setState({
      country: localStorage.getItem('WeatherBitCountry'),
      city: localStorage.getItem('WeatherBitCity'),
      temp: localStorage.getItem('WeatherBitTemp'),
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
            getCustomWeather={weatherBitCustomWeather}
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
