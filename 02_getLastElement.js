//Write a function called "getLastElement". ("getLastElement" 함수를 작성하세요.)

//Given an array, "getLastElement" returns the last element of the given array. (배열이 주어졌을때, "getLastElemeent" 함수는 주어진 배열의 마지막 요소를 반환해야 합니다.)

//Notes:

//If the given array has a length of 0, it should return 'undefined'. (- 만약 배열의 길이가 0이라면, 'undefined'를 반환해야 합니다.)

function getLastElement(array) {
    return array[array.length - 1];
}