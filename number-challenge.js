/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

function sumOfThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  function differenceOfTwoNumbers(num1, num2) {
    return num1 - num2;
  }
  
  function productOfTwoNumbers(num1, num2) {
    return num1 * num2;
  }
  
  function averageOfTwoNumbers(num1, num2) {
    return (num1 + num2) / 2;
  }
  
  const sumResult = sumOfThreeNumbers(6, 9, 14);
  console.log(`The sum of 6, 9, and 14 is: ${sumResult}`);
  
  const differenceResult = differenceOfTwoNumbers(5, 3);
  console.log(`The difference of 5 and 3 is: ${differenceResult}`);
  
  const productResult = productOfTwoNumbers(4, 6);
  console.log(`The product of 4 and 6 is: ${productResult}`);
  
  const averageResult = averageOfTwoNumbers(10, 20);
  console.log(`The average of 10 and 20 is: ${averageResult}`);