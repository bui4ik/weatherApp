import React from 'react'
import DefaultPageTemplate from 'components/templates/DeafaultTemplate'
import apixuWeather from 'utils/apixuWeather'
import WeatherInfoBlock from '../../commonComponents/WeatherInfoBlock'

class ApixuWeather extends React.Component {
  state = {
    country: '',
    city: '',
    temp: '',
  }

  async componentDidMount() {
    const date = localStorage.getItem('ApixuRequestDate')
    const locationDate = date && new Date(parseInt(date))
    const now = new Date()

    const dataAge = Math.round(now - locationDate) / (1000 * 60) // in minutes
    const tooOld = dataAge >= 1

    if (tooOld) {
      const [country, city, temp] = await apixuWeather()
      localStorage.setItem('ApixuCountry', country)
      localStorage.setItem('ApixuCity', city)
      localStorage.setItem('ApixuTemp', temp)
      localStorage.setItem('ApixuRequestDate', Date.now())
      this.setState({ country, city, temp })
    } else {
      console.log(`Using APIXU data from local storage that are ${dataAge} minutes old`)
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
          <WeatherInfoBlock country={country} city={city} temp={temp} />
        ) : (
          <div>Loading...</div>
        )}
      </DefaultPageTemplate>
    )
  }
}

export default ApixuWeather
