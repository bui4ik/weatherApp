import React from 'react'
import AsyncSelect from 'react-select/async'
import apixuWeatherSearch from 'utils/apixuWeatherSearch'
import { css } from 'emotion'
import * as S from './styles'

class CustomCityWeather extends React.Component {
  state = {
    requestValue: '',
    requestResult: {
      country: '',
      city: '',
      temp: '',
    },
  }

  loadOptions = inputValue => {
    return apixuWeatherSearch(inputValue)
  }

  onInputChange = inputValue => {
    this.setState({ requestValue: inputValue })
  }

  getWeather = async () => {
    const { requestValue } = this.state
    const { getCustomWeather } = this.props
    const [country, city, temp] = await getCustomWeather(
      requestValue.latitude,
      requestValue.longitude,
    )
    this.setState({ requestResult: { country, city, temp } })
  }

  render() {
    const { requestResult, requestValue } = this.state
    return (
      <S.Container>
        <S.SelectAndButtonsContainer>
          <S.SelectContainer>
            <AsyncSelect
              loadOptions={this.loadOptions}
              onChange={this.onInputChange}
              className={css`
                width: 260px;
              `}
            />
          </S.SelectContainer>
          <S.Button onClick={this.getWeather} disabled={!requestValue && true}>
            Get Weather
          </S.Button>
        </S.SelectAndButtonsContainer>
        {requestResult.country && (
          <S.RequestResult>
            {requestResult.country}, {requestResult.city}, {requestResult.temp} °C
          </S.RequestResult>
        )}
      </S.Container>
    )
  }
}

export default CustomCityWeather
