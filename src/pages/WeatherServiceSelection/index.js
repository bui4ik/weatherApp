import React from 'react'
import logo from 'pages/WeatherServiceSelection/img/sun.svg'
import ReactSVG from 'react-svg'
import { NavLink } from 'react-router-dom'
import routes from 'config/routes'
import * as S from './styles'

const WeatherServiceSelection = () => (
  <>
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
  </>
)

export default WeatherServiceSelection
