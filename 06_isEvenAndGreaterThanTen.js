//숫자가 주어졌을때, "isEvenAndGreaterThanTen" 함수는 주어진 숫자가 10보다 크고 짝수인지 반환해야 합니다.

function isEvenAndGreaterThanTen(num) {
    if(num > 10 && num % 2 ===0) {
        return true;
    } else {
        return false;
    }
}
