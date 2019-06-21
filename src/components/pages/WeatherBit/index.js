import React from 'react'
import DefaultPageTemplate from 'components/templates/DeafaultTemplate'
import weatherbitWeather from 'utils/weatherbitWeather'
import WeatherInfoBlock from 'components/WeatherInfoBlock'
import compareUpdateTime from 'utils/compareUpdateTime'
import setWeatherBitDataToLocalStorage from 'utils/setWeatherBitDataToLocalStorage'
import Loading from 'components/Loading'
import weatherBitCustomWeather from 'utils/weatherBitCustomWeather'

class WeatherBit extends React.Component {
  state = {
    country: '',
    city: '',
    temp: '',
  }

  async componentDidMount() {
    const isWeatherBitDataTooOld = compareUpdateTime('WeatherBitRequestDate')

    if (isWeatherBitDataTooOld) {
      const [country, city, temp] = await weatherbitWeather()
      setWeatherBitDataToLocalStorage(country, city, temp)
      this.setState({ country, city, temp })
    } else {
      console.log(`Using WeatherBit data from local storage`)
      this.setState({
        country: localStorage.getItem('WeatherBitCountry'),
        city: localStorage.getItem('WeatherBitCity'),
        temp: localStorage.getItem('WeatherBitTemp'),
      })
    }
  }

  render() {
    const { country, city, temp } = this.state
    return (
      <DefaultPageTemplate>
        {country ? (
          <WeatherInfoBlock
            country={country}
            city={city}
            temp={temp}
            getCustomWeather={weatherBitCustomWeather}
          />
        ) : (
          <Loading />
        )}
      </DefaultPageTemplate>
    )
  }
}

export default WeatherBit
