// Part 1: Fizz Buzz

// loop through numbers 1 to 100 and log "Fizz", "Buzz", "Fizz Buzz", or the number itself based on divisibility conditions.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// Part 2: Prime Time

// need to find the next prime number greater than a given numbern n.

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function nextPrime(n) {
  let candidate = n + 1;
  while (!isPrime(candidate)) {
    candidate++;
  }
  console.log(candidate);
}

// Example usage
nextPrime(4); // Output: 5
nextPrime(9); // Output: 11
// part 3 CSV Parsing

// need to parse a CSV string into a two-dimensional array, then convert it into an array of objects.

//CSV Parsing to 2D Array

function parseCSV(csv) {
  let rows = csv.split("\n");
  let result = [];
  for (let row of rows) {
    let cells = row.split(",");
    result.push(cells);
  }
  return result;
}

let csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let parsedData = parseCSV(csvData);
console.log(parsedData);
// Transforming 2D Array to Array of Objects
function transformData(data) {
  let headers = data[0].map((header) => header.toLowerCase());
  let result = [];
  for (let i = 1; i < data.length; i++) {
    let row = data[i];
    let obj = {};
    for (let j = 0; j < row.length; j++) {
      obj[headers[j]] = row[j];
    }
    result.push(obj);
  }
  return result;
}

let transformedData = transformData(parsedData);
console.log(transformedData);

// Part 4: Manipulating Data
// Remove Last Element, Insert at Index 1, Add at the End
transformedData.pop(); // Remove last element

transformedData.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
}); // Insert at index 1

transformedData.push({
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111",
}); // Add at the end

console.log(transformedData);

// Calculate Average Age
let totalAge = 0;
for (let person of transformedData) {
  totalAge += parseInt(person.age);
}
let averageAge = totalAge / transformedData.length;
console.log("Average Age:", averageAge);

// Part 5: Transform Back to CSV
function arrayToCSV(data) {
  let csv = data.map((row) => Object.values(row).join(",")).join("\n");
  return csv;
}

let finalCSV = arrayToCSV(transformedData);
console.log(finalCSV);
