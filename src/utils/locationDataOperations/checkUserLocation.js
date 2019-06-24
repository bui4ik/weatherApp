import compareUpdateTime from '../compareUpdateTime'
import getLocation from './getLocation'
import setLocationDataToLocalStorage from './setLocationDataToLocalStorage'

const checkUserLocation = async () => {
  const isLocationDataTooOld = compareUpdateTime('locationLastUpdatedTime')

  if (isLocationDataTooOld) {
    const { latitude, longitude } = await getLocation()
    setLocationDataToLocalStorage(latitude, longitude)
  }
}

export default checkUserLocation
