//n까지의 총 합
//n을 매개변수로 받아 0 부터 n 까지 모든 수의 총 합을 반환하는 함수를 작성하세요.

function sum(n) {
    let answer = 0;
    for(let i = 0; i <= n; i++) {
        answer += i;
    }
    return answer;
}