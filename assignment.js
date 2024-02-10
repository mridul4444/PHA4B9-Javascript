
function calculateMoney(ticketCount){

    if(ticketCount < 0){
        return "Invalid Number"
    }

    else{
        return (ticketCount * 120) -(500 + (8*50))
    }
  
}


function checkName(name) {
    let vowelList = ["a", "y", "i", "e", "u", "w"];
    if (typeof name !== "string") {
      return "Invalid";
    }
    for (let vowel of vowelList) {
      if (name.endsWith(vowel)) {
        return "Good Name";
      } else {
        return "Bad Name";
      }
    }
  }
  

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
      return "Invalid Array";
    }
  
    let newArray = [];
    for (let arr of array) {
      if (typeof arr === "number" && !isNaN(arr)) {
        newArray.push(arr); 
      }
    }
    return newArray;
  }



function password(obj) {
    if (
      !obj.hasOwnProperty("name") ||
      typeof obj.name !== "string" ||
      !obj.hasOwnProperty("birthYear") ||
      typeof obj.birthYear !== "number" ||
      !obj.hasOwnProperty("siteName") ||
      typeof obj.siteName !== "string" ||
      Number(obj.birthYear).toString().length !== 4
    ) {
        return "invalid";
    }
    const password = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
  
    return password;
  }


  function monthlySavings(arr, livingCost) {
    
    let savings = 0;
    let sum = 0
    if(!Array.isArray(arr) && typeof livingCost !== Number){
      return "Invalid Input"
    }
    for (let value of arr) {
      if (value >= 3000) {
         value = 3000 - value * 20/100
      }
      sum = sum + value
    }
    savings = livingCost - sum
    if(savings === 0 || savings > 0){
      return savings
    }
    else{
      return "Earn More"
    }
  }
  
