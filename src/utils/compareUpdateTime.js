const compareUpdateTime = dataUpdateTime => {
  const date = localStorage.getItem(dataUpdateTime)
  if (date) {
    const propertyDate = date && new Date(parseInt(date))
    const now = new Date()

    const dataAge = Math.round(now - propertyDate) / (1000 * 60) // in minutes
    return dataAge >= 120
  } else {
    return true
  }
}

export default compareUpdateTime
