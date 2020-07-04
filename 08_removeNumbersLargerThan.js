//숫자와 객체가 주어졌을때, "removeNumbersLargerThan" 함수는 주어진 객체에서 주어진 숫자보다 큰 모든 숫자 속성을 제거합니다.

//객체를 탐색하는 반복문은 for ... in 구문을 이용합니다
//for ... in 구문은 MDN을 이용해 검색해보세요.

function removeNumbersLargerThan(num, obj) {
    for(let i in obj){
        if(obj[i] > num) {
            delete obj[i];
        }
    }
}