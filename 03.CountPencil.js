const solution = (students) => {
  const PACKAGE = 12;
  return Math.ceil(students/PACKAGE);
}

console.log(solution(25));
console.log(solution(34));
console.log(solution(37));