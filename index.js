const inArray = (arr = [], val) => {
  arr = arr || []
  let len = arr.length
  let i

  for (i = 0; i < len; i++) {
    if (arr[i] === val) {
      return true
    }
  }

  return false
}

module.exports = inArray
