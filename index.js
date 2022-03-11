
  var add = (number1, number2) => {
     return number1 + number2;
   };
   var subtract = (number1,number2) =>{
     return number1 - number2;
     };
     
    var multiply = (number1,number2) =>{
      return number1 * number2;
      };
    
     var divide = (number1,number2) =>{
      return number1 / number2;
      };
    

 $(document).ready(function(){
   $("form#add").submit(function(event){
     event.preventDefault()
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1,number2)
    $("#output").text(result)
  })
 })
 $(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault()
   var number1 = parseInt($("#add1").val());
   var number2 = parseInt($("#add2").val());
   var result = subtract(number1,number2)
   $("#output").text(result)
 })
})
$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault()
   var number1 = parseInt($("#add1").val());
   var number2 = parseInt($("#add2").val());
   var result = multiply(number1,number2)
   $("#output").text(result)
 })
})
$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault()
   var number1 = parseInt($("#add1").val());
   var number2 = parseInt($("#add2").val());
   var result = d
   divide(number1,number2)
   $("#output").text(result)
 })
})

$(document).ready(function(){
  $("#congrats").hover(function(){
    $("#done").fadeIn()
  })
})
$(document).ready(function(){
  $("#congrats").hover(function(){
    $("#image").fadeIn()
  })
})








// let initialBalance1 = 1000000
// let interest1 = 5
// let initialBalance2 = 8500000
// let interest2 = 6.6

// let duration  = 10
// final_balance1 = calculateFinalBalance(initialBalance1,interest1,duration)
// final_balance2 = calculateFinalBalance(initialBalance2,interest2, duration)


// //creating a function to claculate money after compound rate
// var final_balance1 = (initialBalance1,interest1, noOfYears) =>{
//   // return balance*interest_rate
//   let countYears = 0;
//   while(countYears < noOfYears){
//     totalbalance = calculateIncreasedBalance(initialBalance1,interest1)
//     //each time we go thoughy the loop our balance should increase
//     countYears += 1 //pretend a year has passed
//   }
//   return totalbalance
// }
// var final_balance2 = (initialBalance2,interest2, noOfYears) =>{
//   // return balance*interest_rate
//   let countYears = 0;
//   while(countYears < noOfYears){
//     balance = calculateIncreasedBalance(initialBalance2,interest2)
//     //each time we go thoughy the loop our balance should increase
//     countYears += 1 //pretend a year has passed
//   }
//   return balance
// }
// profit1 = final_balance1 - initialBalance1
// profit2 = final_balance2 - initialBalance2

// if(profit1>profit12){alert("this is the best one")}else{
//   alert(" investment 2 is better")
// }