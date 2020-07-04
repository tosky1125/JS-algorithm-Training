//이름과 나이를 입력받아 문자열을 메세지로써 출력(리턴)하는 checkAge 함수를 작성하세요. 나이에 따라서, 다른 메세지를 출력할 수 있어야 합니다.

//예시)

//이름이 Adrian이고, 21살이거나 더 나이가 많으면, Welcome, Adrian! 을 리턴하세요.
//이름이 John이고, 만일 21살보다 적으면, Go home, John!

function checkAge(name, age) {
    if(age >= 21){
        return 'Welcome, ' + name + '!';
    }else {
        return 'Go home, ' + name + '!';
    }
}
