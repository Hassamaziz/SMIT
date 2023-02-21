// // // // Program to find maximum value taken from user using conditional operator
// // let num1 = Number(prompt("Enter First Number"));
// // let num2 = Number(prompt("Enter Second Number"));

// // if (num1 > num2) {
// //   console.log("The Maximum number is ", num1);
// // } else {
// //   console.log("The Maximum Number is ", num2);
// // }

// Program to find maximum value from three value
// let a=Number(prompt("number 1"));
// let b=Number(prompt("number 2"));
// let c=Number(prompt("number 3"));
// if(a>b && a>c)
// {
//     console.log(a,'is maximum');
// }
// else if (b>c && b>a) {
//     console.log(b ,'is maximum');
    
// } else {
//     console.log(c , 'is maximum');
    
// }

// // program to check if number is int 

// // let nuM1 = parseInt(prompt('Enter Number to Check'));
// // if(Number.isInteger(nuM1)){
// //     console.log('number is INT');
// // }
// // else{
// //     console.log('number is not INT');
// // }


// // Program 1 to find correct month
// let javaMonth = prompt("enter the month in which javascript started:","");
 
//  ( javaMonth == "january" || javaMonth == "jan" ||javaMonth == "January" ) ? alert("You are right") : alert("You are wrong.")

// program 2 to confirm password
//  let user = prompt("Please Enter your name ",'');
//    let password = prompt("Dear ${user} please enter your password" ) ;
//  let confirmPassword = prompt("Dear ${user} please enter your password again");

// let msg = password === confirmPassword ? alert("Welocme user") : alert("Log Out");

// let checkPassword = password === "new123" ? alert("you are welcome user") : alert("user you entered wrong pass: password");

// Program 3 to check status
//  let login = prompt("Enter your Status", "");
//  if (login == 'Employee') {  alert('Hello.')  }
//   else if (login == 'Director') { alert('Greetings Sir')  } 
//  else if (login == '') {  alert('NO login')  }
//   else {  alert("Invalid status")  }



            // program 4 to check eligibility

        
let age = Number(prompt("Enter your age"));
let percentAge = Number(prompt("Enter Your Percentage"));

if(age >= 18 && age <=24 && percentAge >= 80)
{
    alert('Congratulations! You are eligible')
}
 else if(age>=16 && age<=24 && percentAge>=90)
 {
    alert('Congratulations! You are eligible')
 }
 else {
    alert("Sorry  you are not eligible")
 }