const compareUpdateTime = compareProperty => {
  const date = localStorage.getItem(compareProperty)
  const propertyDate = date && new Date(parseInt(date))
  const now = new Date()

  const dataAge = Math.round(now - propertyDate) / (1000 * 60) // in minutes
  return dataAge >= 1
}

export default compareUpdateTime
