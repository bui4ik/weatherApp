import React from 'react'
import { Switch, Route } from 'react-router'
import routes from 'config/routes'
import WeatherServiceSelection from 'components/pages/WeatherServiceSelection'
import ApixuWeather from '../components/pages/ApixuWeather'
import WeatherBit from '../components/pages/WeatherBit'

const Routes = () => (
  <Switch>
    <Route path={routes.root} exact component={WeatherServiceSelection} />
    <Route path={routes.apixuWeather} component={ApixuWeather} />
    <Route path={routes.weatherBit} component={WeatherBit} />
  </Switch>
)

export default Routes
