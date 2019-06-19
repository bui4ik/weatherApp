import React from 'react'
import styles from './index.module.css'

const WeatherInfoBlock = ({ country, city, temp }) => (
  <>
    <div className={styles.location}>
      {country}, {city}
    </div>
    <div className={styles.temperatureContainer}>
      <div className={styles.degrees}>{temp}</div>
      <div className={styles.celsius}>°C</div>
    </div>
  </>
)

export default WeatherInfoBlock
