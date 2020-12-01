// Tradition Saved for Fizz Buzz using a loop
function FizzBuzzA(value1, value2) {
  let returnValue = "";
  for (let i = 1; i <= 100; i++) {
    if (i % value1 == 0 && i % value2 == 0) {
      returnValue += "FizzBuzz ";
    } else if (i % value1 == 0) {
      returnValue += "Fizz ";
    } else if (i % value2 == 0) {
      returnValue += "Buzz ";
    } else {
      returnValue += i + " ";
    }
  }
  return returnValue;
}

function FizzBuzzB(value1, value2) {
  let returnValue = "";
  let Fizz = false;
  let Buzz = false;
  for (let i = 1; i <= 100; i++) {
    Fizz = i % value1 == 0;
    Buzz = i % value2 == 0;
    switch (true) {
      case Fizz && Buzz: {
        returnValue += "FizzBuzz ";
        break;
      }
      case Fizz: {
        returnValue += "Fizz ";
        break;
      }
      case Buzz: {
        returnValue += "Buzz ";
        break;
      }
      default: {
        returnValue += i + " ";
        break;
      }
    }
  }
  return returnValue;
}

// Not Traditional approach
function FizzBuzzC(value1, value2) {
  let returnValue = "";
  for (let i = 1; i <= 100; i++) {
    returnValue +=
      ((i % value1 == 0 ? "Fizz" : "") + (i % value2 == 0 ? "Buzz" : "") || i) +
      " ";
  }
  return returnValue;
}

// FizzBuzz the Meta Strat
function FizzBuzzD(value1, value2) {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    returnArray[i] =
      (i % value1 == 0 ? "Fizz" : "") + (i % value2 == 0 ? "Buzz" : "") || i;
  }
  return returnArray;
}

// Call and use our FizzBuzz
function buzzIt() {
  let output = "";
  let val1 = document.getElementById("Fizzvalue").value;
  let val2 = document.getElementById("Buzzvalue").value;
  output = FizzBuzzC(val1, val2);
  document.getElementById("results").innerHTML = output;
}

// Call and use our template
function buzzItTemplate() {
  let output = [];
  let headTemplate = document.getElementById("template-header");
  let rowTemplate = document.getElementById("template-row-items");

  let templateHTML = rowTemplate.innerHTML;
  let resultsHTML = headTemplate.innerHTML;

  // Get the values the user entered
  let val1 = document.getElementById("Fizzvalue").value;
  let val2 = document.getElementById("Buzzvalue").value;

  // Call out fizzbuzz function
  output = FizzBuzzD(val1, val2);
  for (i = 1; i < output.length; i += 5) {
    resultsHTML += templateHTML
      .replace("{{val1}}", output[i])
      .replace("{{val2}}", output[i + 1])
      .replace("{{val3}}", output[i + 2])
      .replace("{{val4}}", output[i + 3])
      .replace("{{val5}}", output[i + 4]);
  }
  document.getElementById("results").innerHTML = resultsHTML;
}
