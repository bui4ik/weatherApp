import React from 'react'
import DefaultPageTemplate from 'components/templates/DeafaultTemplate'
import apixuWeather from 'utils/apixuWeather'

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
        <div>{country}</div>
        <div>{city}</div>
        <div>{temp} degrees</div>
      </DefaultPageTemplate>
    )
  }
}

export default ApixuWeather
