"use strict"
 

let mealSum = 0
let tax = .08
let tip = .18

let meals = [
    { item: "Butter Chicken", price: 16.50 },
    { item: "Garlic Pratha", price: 6.25, },
    { item: "Mango Laasi", price: 3.75, }
]


for (let index = 0; index < meals.length; index += 1) {

    mealSum = mealSum + meals[index].price

}

let subTotal = mealSum
let subTax = subTotal * tax
let subTip= subTotal * tip
let totalDue = subTotal + subTax + subTip

console.log("The subtotal = $" +subTotal)
console.log("The subtotal with tax = $" +subTax)
console.log("The subtotal with tip = $" +subTip)
console.log("The Total Amount = $" +totalDue)



