"use strict";
function getQuestionPart(phrases) {
    const commonSubstring = findCommonSubstring(phrases);
    const questionPart = phrases.map((word) => word.replace(commonSubstring, ""));
    return questionPart;
}
function findCommonSubstring(phrases) {
    if (phrases.length === 0) {
        return "";
    }
    const shortestWord = phrases.reduce((shortest, word) => word.length < shortest.length ? word : shortest);
    for (let i = shortestWord.length; i > 0; i--) {
        for (let j = 0; j <= shortestWord.length - i; j++) {
            const substring = shortestWord.substring(j, j + i);
            if (phrases.every((word) => word.includes(substring))) {
                return substring;
            }
        }
    }
    return "";
}
const phrases = ["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"];
const commonSubstring = findCommonSubstring(phrases);
const questionPartArray = getQuestionPart(phrases);
console.log(commonSubstring); // Output: "BATH"
console.log(questionPartArray); // Output: [ '', ' SALTS', 'ROOM' ]
