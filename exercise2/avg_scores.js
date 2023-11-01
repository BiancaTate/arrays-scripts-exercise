"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let score = 0


function getAverage() {
    for (let index = 0; index < yourScores.length; index += 1) {
        score = score + yourScores[index]
        
    }
    let average= score/yourScores.length
   console.log(average)
}
getAverage(yourScores);
