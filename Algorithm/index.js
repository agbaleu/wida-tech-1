/**
 * 3. Section 3 – Problem solving
 * 
 * Using your preferred programming language, develop the most efficient function that returns a
 * list of all possible combinations of non-repeating digit (1-9) given variable l and t. l is the length
 * of a combination and t is the total of all numbers in the combination.
 * 
 * Rules:
 * - Digit ranges from 1 to 9
 * - A digit can only be used once
 * - Combination must not appear twice. Example: [1,2,3] is the same with [3,2,1] so only one of
 * them should be in the list.
 * 
 * Example 1:
 * Input: l= 3, t = 6
 * Output: [[1,2,3]]
 * Explanation:
 * 1 + 2 + 3 = 6
 * 
 * Example 2:
 * Input: l = 3, t = 8
 * Output: [[1,2,5], [1,3,4]]
 * Explanation:
 * 1 + 2 + 5 = 8 ,1 + 3 + 4 = 8
 * 
 * Example 3:
 * Input: l = 4, t = 5
 * Output: []
 * Explanation: no combination
 * 
 * Sample Answer in JavaScript:
 * function section3(l, t) {
 *  // Your algorithm goes here
 * }
 */

const [_, __, length, total] = process.argv

function generateNumber() {
  const result = []

  for(let i = 1; i <= 9; i++) {
    result.push(i)
  }

  return result
}

function checkResult(arr, total) {
  let result = 0

  arr.forEach(num => {
    result += num
  })

  return result == total
}

// * Main Algorithm
function section3(l, t) {
  if(!l || !t) return 'Length or Total cannot be empty!'

  const num = generateNumber() // * Gives 1-9 Number
  const result  = []

  let start = true

  // * Your code here
  while(start) {
    const arr = []

    if(checkResult(arr, t)) result.push(arr)
  }
  // * End of your code
  return result
}

console.log(section3(length, total))