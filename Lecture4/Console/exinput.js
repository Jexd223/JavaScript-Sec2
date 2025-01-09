const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your weight (in kg): ', (weight) => {
        rl.question('Enter your height (in m): ', (height) => {
            
            // Parse inputs to numbers
            weight = parseFloat(weight);
            height = parseFloat(height);

            // Calculate BMI
            let bmi = weight / (height * height);
            let bmiRanges = "";

            // Determine BMI Range
            if (bmi < 18.5) {
                bmiRanges = "Underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                bmiRanges = "Healthy";
            } else if (bmi >= 25 && bmi < 30) {
                bmiRanges = "Overweight";
            } else if (bmi >= 30 && bmi < 35) {
                bmiRanges = "Obese";
            } else {
                bmiRanges = "Severely Obese";
            }

            // Output the result
            console.log(`${name}, your BMI is ${bmi.toFixed(2)}. BMI Range is: ${bmiRanges}.`);
            
            rl.close(); // Properly close the readline interface
        });
    });
});
