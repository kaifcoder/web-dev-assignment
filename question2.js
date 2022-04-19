// program to check if a number is prime or not


function prime(number){
    let isPrime = true;
    
    // check if number is equal to 1
    
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    
    // check if number is greater than 1
    else if (number > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log("True");
        } else {
            console.log("False");
        }
    }
    
    // check if number is less than 1
    else {
        console.log("False");
    }
    }
    
    // take input from the user
    const number = parseInt(prompt("Enter a positive number: "));
    prime(number);