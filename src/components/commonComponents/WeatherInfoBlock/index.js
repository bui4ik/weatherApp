import React from 'react'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'
import routes from 'config/routes'

const WeatherInfoBlock = ({ country, city, temp }) => (
  <>
    <div className={styles.location}>
      {country}, {city}
    </div>
    <div className={styles.temperatureContainer}>
      <div className={styles.degrees}>{temp}</div>
      <div className={styles.celsius}>°C</div>
    </div>
    <NavLink to={routes.root}><button className={styles.backButton}> ← back </button></NavLink>
  </>
)

export default WeatherInfoBlock
