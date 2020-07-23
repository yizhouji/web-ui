const getCarStyle = (carCode) => {
  if (carCode === '0') {
    return '457B'
  }
  if (carCode === '1') {
    return '262B'
  }
  if (carCode === '2') {
    return '263B'
  }
  if (carCode === '3') {
    return 'A26'
  }
  if (carCode === '4') {
    return '711B'
  }
  if (carCode === '5') {
    return '819'
  }
  if (carCode === '6') {
    return '530'
  }
  if (carCode === '7') {
    return '530双擎'
  }
  if (carCode === '8') {
    return '618'
  }
}

const getCurrnentDate = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  hour = hour < 10 ? '0' + hour : hour
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  var nowDate = year + '-' + month + '-' + day + '   ' + hour + ':' + minutes + ':' + seconds
  return nowDate
}

export default {
  getCarStyle,
  getCurrnentDate
}
