const getColor = ind => {
  const colors = ['35BCE6', 'FF742E', 'FFE270', '00D0FF', 'FF6E6E']
  return '#' + colors[ind % colors.length]
}

export { getColor }
