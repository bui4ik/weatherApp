import React from 'react'
import DefaultPageTemplate from 'components/templates/DeafaultTemplate'
import weatherbitWeather from 'utils/weatherbitWeather'
import WeatherInfoBlock from 'components/commonComponents/WeatherInfoBlock'

class WeatherBit extends React.Component {
  state = {
    country: '',
    city: '',
    temp: '',
  }

  async componentDidMount() {
    const date = localStorage.getItem('WeatherBitRequestDate')
    const locationDate = date && new Date(parseInt(date))
    const now = new Date()

    const dataAge = Math.round(now - locationDate) / (1000 * 60 ) // in minutes
    const tooOld = dataAge >= 1

    if (tooOld) {
      const [country, city, temp] = await weatherbitWeather()
      localStorage.setItem('WeatherBitCountry', country)
      localStorage.setItem('WeatherBitCity', city)
      localStorage.setItem('WeatherBitTemp', temp)
      localStorage.setItem('WeatherBitRequestDate', Date.now())
      this.setState({ country, city, temp })
    } else {
      console.log(`Using WeatherBit data from local storage that are ${dataAge} minutes old`)
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
          <WeatherInfoBlock country={country} city={city} temp={temp} />
        ) : (
          <div>Loading...</div>
        )}
      </DefaultPageTemplate>
    )
  }
}

export default WeatherBit
