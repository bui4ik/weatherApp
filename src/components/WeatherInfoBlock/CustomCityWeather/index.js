import React from 'react'
import apixuCitySearch from 'utils/apixuCitySearch'
import * as S from './styles'

class CustomCityWeather extends React.Component {
  state = {
    requestValue: '',
  }

  loadOptions = inputValue => {
    return apixuCitySearch(inputValue)
  }

  onInputChange = inputValue => {
    this.setState({ requestValue: inputValue })
  }

  getWeather = async () => {
    const { requestValue } = this.state
    const { getCustomWeather, setWeatherDataToLocalStorage, onNewCityWeatherRequest } = this.props
    const [country, city, temp] = await getCustomWeather(
      requestValue.latitude,
      requestValue.longitude,
    )
    setWeatherDataToLocalStorage(country, city, temp)
    onNewCityWeatherRequest()
  }

  render() {
    const { requestValue } = this.state
    return (
      <S.Container>
        <S.Hint>start writing to select a city</S.Hint>
        <S.SelectAndButtonsContainer>
          <S.SelectContainer>
            <S.Select loadOptions={this.loadOptions} onChange={this.onInputChange} />
          </S.SelectContainer>
          <S.Button onClick={this.getWeather} disabled={!requestValue}>
            Get Weather
          </S.Button>
        </S.SelectAndButtonsContainer>
      </S.Container>
    )
  }
}

export default CustomCityWeather
