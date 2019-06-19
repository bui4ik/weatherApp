import React from 'react'
import styles from './index.module.css'

const DefaultPageTemplate = ({ children }) => (
  <div className={styles.pageContainer}>
    <div className={styles.container}>{children}</div>
  </div>
)

export default DefaultPageTemplate
