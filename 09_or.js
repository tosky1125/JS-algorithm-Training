//Write a function called "or". ("or" 함수를 작성하세요.)

//Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator. (boolean 두개가 주어졌을때, "or" 함수는 || 연산자에 대응하는 true 나 false 를 반환합니다.)

//Notes:

//Do not use the || operator. (|| 연산자를 사용하지 마세요.)
//Use ! and && operators instead. (대신 ! 와 && 연산자를 사용하세요.)


function or(expression1, expression2) {
    if(!expression1 && !expression2) {
        return false;
    } else {
        return true;
    }
}