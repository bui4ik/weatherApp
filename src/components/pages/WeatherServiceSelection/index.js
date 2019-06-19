import React from 'react'
import styles from './index.module.css'
import logo from 'assets/img/sun.svg'
import ReactSVG from 'react-svg'
import { NavLink } from 'react-router-dom'
import routes from 'config/routes'
import getLocation from '../../../utils/getLocation'
import DefaultPageTemplate from '../../templates/DeafaultTemplate'

class WeatherServiceSelection extends React.Component{

  async componentDidMount() {
    const {latitude,longitude} = await getLocation()
    localStorage.setItem('latitude', latitude)
    localStorage.setItem('longitude', longitude)
  }

  render() {
    return (
      <DefaultPageTemplate>
        <div className={styles.logoContainer}>
          <ReactSVG src={logo}/>
        </div>
        <div className={styles.title}>Weather App</div>
        <div className={styles.text}>Choose weather service</div>
        <div className={styles.buttonsContainer}>
          <NavLink to={routes.apixuWeather}><button className={styles.button}>ApixuWeather</button></NavLink>
          <NavLink to={routes.weatherBit}><button className={styles.button}>WeatherBit</button></NavLink>
        </div>
      </DefaultPageTemplate>
    )
  }
}

export default WeatherServiceSelection
