let intTORoman = (numValue) => {
    let dataTemp = numValue, romanValue = "";;
    let numberList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanList = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    
    for (let index = 0; index < numberList.length; index++) {
      while (numberList[index] <= dataTemp) {
        romanValue += romanList[index];
        dataTemp -= numberList[index];
      }
    }
    console.log(`${romanValue}`);
  };
  
  intTORoman(20);