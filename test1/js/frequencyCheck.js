let frequencyCheck = (value) => {
  var highestFrequencyNumber = 0,
    highestFrequencyChar = "";
  value.split("").forEach(function (char) {
    if (value.split(char).length > highestFrequencyNumber) {
      highestFrequencyNumber = value.split(char).length-1;
      highestFrequencyChar = char;
    }
  });
  return (
    "The " +
    highestFrequencyChar +
    " has the highest frequency of " +
    highestFrequencyNumber
  );
};

console.log(frequencyCheck("absaaab"));
console.log(frequencyCheck("Best Course Ever"));
console.log(frequencyCheck("how are you???"));
