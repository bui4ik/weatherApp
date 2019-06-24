import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from 'config/routes'
import * as S from './styles'
import CitySelection from '../CitySelection'

const WeatherInfoBlock = ({
  country,
  city,
  temperature,
  getCustomWeather,
  setWeatherDataToLocalStorage,
  onNewCityWeatherRequest,
}) => (
  <>
    <S.Location>
      {country}, {city}
    </S.Location>
    <S.TemperatureContainer>
      <S.Degrees>{temperature}</S.Degrees>
      <S.Celsius>°C</S.Celsius>
    </S.TemperatureContainer>
    <CitySelection
      getCustomWeather={getCustomWeather}
      setWeatherDataToLocalStorage={setWeatherDataToLocalStorage}
      onNewCityWeatherRequest={onNewCityWeatherRequest}
    />
    <NavLink to={routes.root}>
      <S.BackButton> ← back </S.BackButton>
    </NavLink>
  </>
)

export default WeatherInfoBlock
