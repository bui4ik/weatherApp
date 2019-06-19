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
    const [country, city, temp] = await apixuWeather()
    this.setState({ country, city, temp })
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
