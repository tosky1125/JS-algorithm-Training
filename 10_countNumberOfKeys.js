//Write a function called "countNumberOfKeys". ("countNumberOfKeus" 함수를 작성하세요.)

//Given an object, "countNumberOfKeys" returns how many properties the given object has. (객체가 주어졌을때, "countNumberOfKeys" 함수는 객체안에 있는 속성들의 갯수를 반환합니다.)

function countNumberOfKeys(obj) {
    let counter = 0;
    for(let i in obj) {
        counter ++
    } return counter;
}