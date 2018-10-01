const wrap = (str, num) => {
  let currentPos = 0
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (i === num) {
      let currentVal = str[i]
      // is it blank?
      if (currentVal === " ") {
        let subStr = str.slice(0, i)
        result.push(subStr)
      }
      // it is not blank
    }
  }
  return result.join("\n")
}
let r = wrap("hi there", 4)
console.log(r)

module.exports = wrap
