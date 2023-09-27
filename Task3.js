function add() {
  // Get the values of the input fields
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
  } else {
    // Calculate multiplication and division
    const addResult = num1 + num2;

    // Display the results on the webpage
    document.getElementById(
      "addResult"
    ).textContent = `Addition: ${num1} + ${num2} = ${addResult}`;
  }
}

function mul() {
  // Get the values of the input fields
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
  } else {
    // Calculate multiplication and division
    const multiplicationResult = num1 * num2;

    // Display the results on the webpage
    document.getElementById(
      "multiplicationResult"
    ).textContent = `Multiplication: ${num1} * ${num2} = ${multiplicationResult}`;
  }
}
