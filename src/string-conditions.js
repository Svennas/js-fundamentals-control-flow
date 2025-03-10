// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

const answerOne = STR_ONE === 'Hello'

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

const answerTwo = STR_ONE !== 'Goodbye'

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

const answerThree = STR_THREE.length > STR_FOUR.length

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

const answerFour =
  STR_FIVE.slice(0, 1).toLowerCase() === STR_FIVE.slice(-1).toLowerCase()
console.log(STR_FIVE.slice(0, 1))
console.log(STR_FIVE.slice(-1))

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

STR_SIX.toLowerCase()
const answerFive =
  STR_SIX.slice(0, 1).toLowerCase() === STR_SIX.slice(-1).toLowerCase()

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix
if (STR_SEVEN.length % 2 === 1) {
  answerSix = STR_SEVEN[STR_SEVEN.length / 2 - 0.5]
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven
if (STR_EIGHT.length % 2 === 0) {
  answerSeven =
    STR_EIGHT[STR_EIGHT.length / 2 - 1] + STR_EIGHT[STR_EIGHT.length / 2]
}

// 8. Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'

const spring = ['March', 'April', 'May']
const summer = ['June', 'July', 'August']
const autumn = ['September', 'Oktober', 'November']
const winter = ['December', 'January', 'February']

let answerEight

if (spring.includes(MONTH)) {
  answerEight = 'Spring'
} else if (summer.includes(MONTH)) {
  answerEight = 'Summer'
} else if (autumn.includes(MONTH)) {
  answerEight = 'Autumn'
} else if (winter.includes(MONTH)) {
  answerEight = 'Winter'
} else {
  answerEight = 'Error'
}

module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
