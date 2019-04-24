const getColor = ind => {
  const colors = ['35BCE6', 'FF742E', 'FFE270', '00D0FF', 'FF6E6E']
  return '#' + colors[ind % colors.length]
}

const youtubeParser = url => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}

export { getColor, youtubeParser }
