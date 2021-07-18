const soulution = (arr) => {
  let answer = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < answer) {
      answer = arr[i];
    }
  }
  return answer;
}

const arr = [5,7,1,3,2,9,11];
console.log(soulution(arr));

const anotherSolution = (arr) => {
  return Math.min(...arr);
}

console.log(anotherSolution(arr));