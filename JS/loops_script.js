const MAX_NUMBER = 10000000000000000; // Adjust this value as needed

document.querySelector("#calculate").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operation = document.getElementById("operation").value;

    // Check for valid number and maximum limit
    if (isNaN(num1) || num1 < 0) {
        alert("Please enter a valid positive number");
        return;
    }
    if (num1 > MAX_NUMBER) {
        alert("It's too much!");
        return;
    }

    let result = 0;
    let i = 1;

    if(operation == "Fact") {
        result = 1;
        while(i <= num1) {
            result *= i;
            i++;
        }
    } else if(operation == "Sum") {
        do {
            result += i;
            i++;
        } while(i <= num1);
    } else if(operation =="Ave") {
        for(let i = 1; i <= num1; i++) {
            result += i;
        } 
        result /= num1;
    }

    document.getElementById("result").value = result;
});