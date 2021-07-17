const solution = (a,b,c) => {
  let max, total = a + b + c;

  if(a > b) {
    max = a;
  } else {
    max = b;
  }

  if(c > max) {
    max = c;
  }

  return total - max > max ? 'YES' : 'NO';
}

console.log(solution(6,7,11));
console.log(solution(13,33,17));