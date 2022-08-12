module.exports = function toReadable(number) {
   const units = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen"
   };
   const unitstenths = {
      0: "ten",
      1: "eleven",
      2: "twelve",
      3: "thirteen",
      4: "fourteen",
      5: "fifteen",
      6: "sixteen",
      7: "seventeen",
      8: "eighteen",
      9: "nineteen"
   };
   const tenths = {
      1: "ten",
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety"
   };
   const numberStr = number.toString();
   let result = "";

   if (number === 0) {
      result = "zero";
   }
   else if (number > 0 && number < 20) {
      result = units[number];
   }
   else if (number >= 20 && number < 100) {
      if (+numberStr[1] === 0) {
         result = tenths[+numberStr[0]];
      }
      else {
         result = `${tenths[+numberStr[0]]} ${units[+numberStr[1]]}`;
      }
   }
   else if (number >= 100) {
      const numberStr = number.toString();
      let ferstNum = +numberStr[0];
      let secondNum = +numberStr[1];
      let thirdNum = +numberStr[2];
      if (secondNum === 0) {
         if (thirdNum === 0) {
            result = `${units[ferstNum]} hundred`;
         } else {
            result = `${units[ferstNum]} hundred ${units[thirdNum]}`;
         }
      }
      else if (thirdNum === 0) {
         result = `${units[ferstNum]} hundred ${tenths[secondNum]}`;
      }
      else if (secondNum === 1) {
         result = `${units[ferstNum]} hundred ${unitstenths[thirdNum]}`
      }

      else {
         result = `${units[ferstNum]} hundred ${tenths[secondNum]} ${units[thirdNum]}`
      }
   }
   return result;
};
