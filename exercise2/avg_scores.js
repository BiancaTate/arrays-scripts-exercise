"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];


function getAverage(scores) {
    let scoreSum = 0
    for (let index = 0; index < scores.length; index += 1) {
        scoreSum = scoreSum + scores[index]
    }

    let average = scoreSum / scores.length
    return average
}

console.log(getAverage(yourScores));
console.log(getAverage(myScores));
