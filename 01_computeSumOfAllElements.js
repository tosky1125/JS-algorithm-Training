//Write a function called "computeSumOfAllElements". ("computeSumOfAllElements" 함수를 작성하세요.)

//Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array. (숫자의 배열이 주어졌을때, "computeSumOfAllElements" 함수는 주어진 배열의 모든 요소의 합을 반환합니다.)

function computeSumOfAllElements(arr) {
    return arr.reduce(function(acc, val){
        return acc + val;
    },0)
}