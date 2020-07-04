//점수가 주어졌을때, "convertScoreToGradeWithPlusAndMinus" 함수는 주어진 점수와 대응하는 등급을 문자열로 반환합니다.
//
//Notes:
//
//(100 - 90) --> 'A'
//(89 - 80) --> 'B'
//(79 - 70) --> 'C'
//(69 - 60) --> 'D'
//(59 - 0) --> 'F'
//만약 주어진 점수가 100을 초과하거나 0 미만이라면 INVALID SCORE 를 반환해야 합니다.
//만약 점수의 1의 자리가 0~2 사이라면 등급과 함께 '-'를 반환해야 합니다.
//만약 점수의 1의 자리가 8~9 사이라면 등급과 함께 '+'를 반환해야 합니다.
//F+ 와 F- 는 존재하지 않습니다.

function convertScoreToGradeWithPlusAndMinus(score) {
    let grade = '';
    let plusAndMinus = '';
    if(score === 100){
        return 'A+';
    }
    if(score <= 100 && score >= 0){
        if(Math.floor(score / 10) === 9) {
            grade = 'A';
        } else if(Math.floor(score / 10) === 8) {
            grade = 'B';
        } else if(Math.floor(score / 10) === 7) {
            grade = 'C';
        } else if(Math.floor(score / 10) === 6) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        if(score % 10 >= 8 && score % 10 <= 9){
            plusAndMinus = '+';
        } else if(score % 10 >= 0 && score % 10 <= 2){
            plusAndMinus = '-';
        }
    } else {
        return 'INVALID SCORE';
    }

    if(grade === 'F') {
        return grade;
    } else {
        return grade + plusAndMinus;
    }
}