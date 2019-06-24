import React from 'react'
import { Switch, Route } from 'react-router'
import routes from 'config/routes'
import WeatherServiceSelection from 'pages/WeatherServiceSelection'
import ApixuWeather from '../pages/ApixuWeather'
import WeatherBit from '../pages/WeatherBit'

const Routes = () => (
  <Switch>
    <Route path={routes.root} exact component={WeatherServiceSelection} />
    <Route path={routes.apixuWeather} component={ApixuWeather} />
    <Route path={routes.weatherBit} component={WeatherBit} />
  </Switch>
)

export default Routes
