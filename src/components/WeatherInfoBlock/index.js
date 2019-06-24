import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from 'config/routes'
import * as S from './styles'
import CustomCityWeather from './CustomCityWeather'

const WeatherInfoBlock = ({
  country,
  city,
  temp,
  getCustomWeather,
  setWeatherDataToLocalStorage,
  onNewCityWeatherRequest,
}) => (
  <>
    <S.Location>
      {country}, {city}
    </S.Location>
    <S.TemperatureContainer>
      <S.Degrees>{temp}</S.Degrees>
      <S.Celsius>°C</S.Celsius>
    </S.TemperatureContainer>
    <CustomCityWeather
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
