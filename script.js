const input = document.querySelector("#user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const result = document.getElementById("results-div")


const checkInput = () => {
  if (!input.value) {
    alert("Please provide a phone number")
  }

  if (Array.from(document.querySelectorAll('#results-div p')).length == 2) {
    return
  }

let checkLength = input.value.match(/\d/g)
if (!checkLength) {
  checkLength = 0
}

const bracket = /[\(\)]/g
const brackets = /\([\d-]*\)/g

let testA = checkLength.length === 10 || (checkLength.length === 11 && input.value[0] == 1)

let testB = /^1?[\s\(]?[\(]?\d{3,}[\)\s-]?[\s]?\d{3,}[-\s]?\d{4,}$/g.test(input.value)

let testC = bracket.test(input.value)
let testD = brackets.test(input.value)


  if (testA && testB) {
    if ((testC && testD) || !testC) {
      let HTMLString = `<p>Valid US number: ${input.value}</p>`
     result.insertAdjacentHTML('beforeend', HTMLString)
    }
    else {
      let HTMLString = `<p>Invalid US number: ${input.value}</p>`
     result.insertAdjacentHTML('beforeend', HTMLString) }
    }

    else {
   let HTMLString = `<p>Invalid US number: ${input.value}</p>`
     result.insertAdjacentHTML('beforeend', HTMLString)
}
}


const clearInput = () => {
  result.innerHTML = ""
  input.value=""
}





checkBtn.addEventListener("click",checkInput)

clearBtn.addEventListener("click",clearInput)