import React from 'react'
import logo from 'assets/img/sun.svg'
import ReactSVG from 'react-svg'
import { NavLink } from 'react-router-dom'
import routes from 'config/routes'
import getLocation from 'utils/getLocation'
import DefaultPageTemplate from 'components/templates/DeafaultTemplate'
import compareUpdateTime from 'utils/compareUpdateTime'
import setLocationDataToLocalStorage from 'utils/setLocationDataToLocalStorage'
import * as S from './styles'

class WeatherServiceSelection extends React.Component {
  async componentDidMount() {
    const isLocationDataTooOld = compareUpdateTime('locationLastUpdatedTime')

    if (isLocationDataTooOld) {
      const { latitude, longitude } = await getLocation()
      setLocationDataToLocalStorage(latitude, longitude)
    } else {
      console.log(`Using location data from local storage`)
    }
  }

  render() {
    return (
      <DefaultPageTemplate>
        <S.LogoContainer>
          <ReactSVG src={logo} />
        </S.LogoContainer>
        <S.Title>Weather App</S.Title>
        <S.Text>Choose weather service</S.Text>
        <S.ButtonsContainer>
          <NavLink to={routes.apixuWeather}>
            <S.Button>ApixuWeather</S.Button>
          </NavLink>
          <NavLink to={routes.weatherBit}>
            <S.Button>WeatherBit</S.Button>
          </NavLink>
        </S.ButtonsContainer>
      </DefaultPageTemplate>
    )
  }
}

export default WeatherServiceSelection
