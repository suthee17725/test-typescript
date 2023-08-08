"use strict";
function getHandScore(input) {
    const normalizedInput = input.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
    const characters = normalizedInput.split("");
    const counts = {};
    for (const char of characters) {
        counts[char] = (counts[char] || 0) + 1;
    }
    let maxCount = 0;
    for (const char in counts) {
        if (counts.hasOwnProperty(char)) {
            if (counts[char] > maxCount) {
                maxCount = counts[char];
            }
        }
    }
    if (maxCount >= 3) {
        if (maxCount === 3 && counts["a"] === 3) {
            return 35;
        }
        else {
            return 32.5;
        }
    }
    let totalScore = 0;
    for (const char of characters) {
        if (char === "a") {
            totalScore += 11;
        }
        else if (["j", "q", "k"].includes(char)) {
            totalScore += 10;
        }
        else if (/[2-9]/.test(char)) {
            totalScore += parseInt(char);
        }
    }
    return totalScore;
}
const input = "8s 8d 8h"; // มี 3 ใบ 8 ที่เหมือนกัน
const score = getHandScore(input);
console.log(`คะแนนของมือไพ่คือ: ${score}`);
