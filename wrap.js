const wrap = (str, num) => {
  let currentPos = 0
  let results = []
  let indices = [0]
  for (let i = 0; i < str.length; i++) {
    if (i === num) {
      let currentVal = str[i]
      // is it blank?
      if (currentVal === " ") {
        // let subStr = str.slice(0, i)
        indices.push(i)
      }
      // it is not blank
      else {
        for (let l = i; l > 0; l--) {
          let currentVal2 = str[l - 1]
          if (currentVal2 === " ") {
            //  let subStr = str.slice(i, i+l+1)
            //  result.push(subStr);
            indices.push(l)
          }
        }
      }
    }
  }
  //   return result.join("\n")
  indices.push(str.length)
  //   console.log(str.slice(0, 3))
  //   console.log(str.slice(3, 3 + str.length - 1))
  while (indices.length > 1) {
    // console.log(str.slice(indices[0], indices[1]))
    results.push(str.slice(indices[0], indices[1]))
    indices.shift()
  }
  //   return indices
  return results.join("\n")
}

// debugger
let r = wrap("hi there", 4)
console.log(r)

module.exports = wrap
