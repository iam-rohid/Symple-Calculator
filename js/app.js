const calcBtn = document.querySelectorAll('#calc-btn')
const btnAC = document.querySelector('#btn-ac')
const btnC = document.querySelector('#btn-c')
const ansBtn = document.querySelector("#btn-ans")
const display = document.querySelector("#display")

var a = 0, b = 0, calcMethod = '', ans = 0


function calculation() {
  if (calcMethod === 'summation') {
    ans = a + b
  } else if (calcMethod === 'subtract') {
    ans = a - b
  } else if (calcMethod === 'multiply') {
    ans = a * b
  } else if (calcMethod === 'divided') {
    ans = a / b
  }
  display.value = ans
  displayText = ''
  calcMethod = ''
  a = ans
}

calcBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    handleValues(btn.value)
  })
});

function clearDisplay() {
  a = 0
  b = 0
  ans = 0
  displayText = ''
  calcMethod = ''
  display.value = 0
}

function add_a() {
  if (displayText != '') {
    ans = 0
    a = parseInt(displayText)
    displayText = ''
    display.value = 0
  }
}

function handleValues(value) {
  if (value === "+") {
    calcMethod = 'summation'
    add_a()
  } else if (value === '-') {
    calcMethod = 'subtract'
    add_a()
  }
  else if (value === '*') {
    calcMethod = 'multiply'
    add_a()
  }
  else if (value === '/') {
    calcMethod = 'divided'
    add_a()
  }
  else if (displayText != '' || value != 0) {
    displayText += value
    display.value = displayText
  }

}

btnAC.addEventListener('click', function () {
  a = 0
  b = 0
  ans = 0
  displayText = ''
  calcMethod = ''
  display.value = 0
})

btnC.addEventListener('click', function () {
  displayText = ''
  display.value = 0
})

ansBtn.addEventListener('click', function () {
  if (calcMethod == '') {
    a = parseInt(displayText)
    b = 0
    ans = 0
  } else if (a == 0 && calcMethod != '') {
    a = parseInt(displayText)
  } else if (ans != 0 && calcMethod != '') {
    a = ans
    b = parseInt(displayText)
    calculation()
  }
  else {
    b = parseInt(displayText)
    calculation()
  }
})

clearDisplay()