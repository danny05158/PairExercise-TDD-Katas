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
      else{
        for(let l = i; l>0; l--){
           let currentVal2 = str[l-1];
           if(currentVal2 === " "){
             let subStr = str.slice(i, i+l+1)
             result.push(subStr);
           }
        }
      }
    }
  }
  return result.join("\n")
}

debugger
let r = wrap("hi there", 4)
console.log(r)

module.exports = wrap
