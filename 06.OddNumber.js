const solution = (arr) => {
  let oddNums = arr.filter(e => isOdd(e));
  console.log(oddNums)
  return {
    sum : oddNums.reduce((acc,val) => acc + val,0),
    min : Math.min(...oddNums),
  }
}
const isOdd = (num) => num % 2 !== 0;
const arr = [12, 77 ,38, 41, 53, 92, 85];
console.log(solution(arr));
