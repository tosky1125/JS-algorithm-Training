//Write a function called "countAllCharacters". ("countAllCharacters" 함수를 작성하세요")

//Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string. (문자열이 주어졌을때, "countAllCharacters" 함수는 주어진 문자열의 각각의 문자를 키로 가지는 객체를 반환합니다. 각 키의 값은 해당 문자가 주어진 문자열에서 몇번 나오는지를 나타냅니다.)

//Notes:

//If given an empty string, countAllCharacters should return an empty object. (만약 빈 문자열이 주어졌다면, "countAllCharacters" 함수는 빈 객체를 반환해야 합니다.)
//let output = countAllCharacters('banana');

function countAllCharacters(str) {
    let answer = {};
    for(let i = 0; i < str.length; i++) {
        if(answer[str[i]] === undefined) {
            answer[str[i]] = 0;
        } answer[str[i]]++;
    }  return answer;
}