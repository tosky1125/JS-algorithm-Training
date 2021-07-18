const solution =  (arr) => {
  let answer = arr;
  const sum = arr.reduce((acc,val) => acc + val, 0);
  for(let i = 0; i < arr.length -1; i++) {
    for(let j = i + 1; j < arr.length; j++){
      const select = arr[i] + arr[j];
      if(sum - select === 100) {
        answer.splice(i, 1);
        answer.splice(j - 1, 1);
        break;
      }
    }
  }
  return answer;
}

const arr = [20,7,23,19,10,15,25,8,13];
console.log(solution(arr));