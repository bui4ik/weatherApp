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
    const [country, city, temp] = await weatherbitWeather()
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

export default WeatherBit
