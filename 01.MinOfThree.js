const solution = (a,b,c) => {
  let answer = a;
  if(a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if(answer > c) {
    answer = c;
  }

  return answer;
}

console.log(solution(1,2,3));
console.log(solution(3,2,1));
console.log(solution(2,3,1));