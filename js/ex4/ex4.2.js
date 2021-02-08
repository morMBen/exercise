(function () {
    'use strict'

    function testScore(score) {
        if (score >= 0 && score < 65) {
            return 'F';
        } else if (score >= 0 && score < 70) {
            return 'D';
        } else if (score >= 0 && score < 80) {
            return 'C';
        } else if (score >= 0 && score < 90) {
            return 'B';
        } else if (score >= 0 && score < 101) {
            return 'A';
        } else {
            return 'Not in the range.'
        }
    }
})();