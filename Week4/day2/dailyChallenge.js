// Copy this object using the method that was taught in today’s lesson.
// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?




let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};
let groceries2 = groceries;
groceries2.totalPrice = '35$';
console.log(groceries.totalPrice);
console.log(groceries2.totalPrice);
groceries2.other.payed = false;
console.log(groceries2.other.payed);
console.log(groceries2.other.payed);
