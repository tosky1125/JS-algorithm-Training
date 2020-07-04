//점수가 주어졌을때, "convertScoreToGrade" 함수는 주어진 점수와 대응하는 등급을 문자열로 반환합니다.

//Notes:

//(100 - 90) --> 'A'
//(89 - 80) --> 'B'
//(79 - 70) --> 'C'
//(69 - 60) --> 'D'
//(59 - 0) --> 'F'
//만약 주어진 점수가 100을 초과하거나 0 미만이라면 문자열 INVALID SCORE 를 반환해야 합니다.

function convertScoreToGrade(score) {
    if(score <= 100 && score >= 0) {
        if(score > 89) {
            return 'A';
        } else if(score > 79) {
            return 'B';
        } else if(score > 69) {
            return 'C';
        } else if(score > 59) {
            return 'D';
        } else {
            return 'F';
        }
    } else {
        return 'INVALID SCORE';
    }
}