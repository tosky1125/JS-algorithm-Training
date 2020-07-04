파라미터로 두 개의 객체와 키를 받는 addObjectProperty 함수가 있습니다. 이 함수는 주어진 첫번째 객체에, 키 이름으로 속성을 만드는데, 그 값은 두번째 객체로 설정합니다.

객체의 키 값은 또다른 객체가 될 수 있음을 기억하세요.

function addObjectProperty(obj1, propertyName, obj2) {
    obj1[propertyName] = obj2;   
}
