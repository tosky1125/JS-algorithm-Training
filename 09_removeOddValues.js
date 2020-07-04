//객체가 주어졌을때, "removeOddValues" 함수는 주어진 객체의 속성값이 홀수인 속성을 모두 제거합니다.

//객체를 탐색하는 반복문은 for ... in 구문을 이용합니다
//for ... in 구문은 MDN을 이용해 검색해보세요.

function checkOdd(num){
    if(num % 2 === 1){
        return true;
    } else {
        return false;
    }
}

function removeOddValues(obj) {
    for(let i in obj) {
        if(checkOdd(obj[i])) {
            delete obj[i];
        }
    }  
}