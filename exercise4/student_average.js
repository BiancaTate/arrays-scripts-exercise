"use strict"

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
]

function findClassAverage (studentsArray) {
    let scoreTally = 0
    for (let index= 0; index < studentsArray.length; index += 1){
        const currentStudent = studentsArray[index]
        scoreTally += currentStudent.scores.length

        for (let index=0; index< students.scores.length; index =+ 1){
            
        }
    }
    

}

const classAverageScore = findClassAverage (students)

console.log(`Class Wide Average Score: ${classAverageScore}`)