import React from 'react'
import DefaultPageTemplate from 'components/templates/DeafaultTemplate'
import apixuWeather from 'utils/apixuWeather'
import WeatherInfoBlock from 'components/WeatherInfoBlock'
import compareUpdateTime from 'utils/compareUpdateTime'
import setApixuWeatherDataToLocalStorage from 'utils/setApixuWeatherDataToLocalStorage'
import Loading from 'components/Loading'
import apixuCustomWeather from '../../../utils/apixuCustomWeather'

class ApixuWeather extends React.Component {
  state = {
    country: '',
    city: '',
    temp: '',
  }

  async componentDidMount() {
    const isApixuWeatherDataTooOld = compareUpdateTime('ApixuRequestDate')

    if (isApixuWeatherDataTooOld) {
      const [country, city, temp] = await apixuWeather()
      setApixuWeatherDataToLocalStorage(country, city, temp)
      this.setState({ country, city, temp })
    } else {
      console.log(`Using APIXU data from local storage`)
      this.setState({
        country: localStorage.getItem('ApixuCountry'),
        city: localStorage.getItem('ApixuCity'),
        temp: localStorage.getItem('ApixuTemp'),
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
            getCustomWeather={apixuCustomWeather}
          />
        ) : (
          <Loading />
        )}
      </DefaultPageTemplate>
    )
  }
}

export default ApixuWeather
