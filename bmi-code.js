function convertUnits() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }
    const weightUnit = document.getElementById("weight-unit").value;
    const heightUnit = document.getElementById("height-unit").value;

    const weightInKg ={
        "kg" : 1,
        'lb' : 0.453592,
    }
    const heightInM = {
        "meters" : 1,
        'cm' : 0.01,
        'feet' : 0.3048,
    }
    let weightinKgvalue = weight * weightInKg[weightUnit];
    let heightInMvalue = height * heightInM[heightUnit];
    return { weightinKgvalue, heightInMvalue };
}
function calculateBMI() {
    const converted = convertUnits();
    if (!converted) return;
    const { weightinKgvalue, heightInMvalue } = converted;
    let BMImsg;
    let result= weightinKgvalue / (heightInMvalue * heightInMvalue);
    if(result < 18.5) {
        BMImsg="You are underweight";
    }else if(result >= 18.5 && result < 24.9) {
        BMImsg="Your weight falls within the healthy range.";
    } else if(result >= 25 && result < 29.9) {
        BMImsg="You are overweight";
    } else {
        BMImsg="You are obese";
    }
    document.getElementById("bmi").value = `Your BMI is ${result.toFixed(2)}. ${BMImsg}`;
}