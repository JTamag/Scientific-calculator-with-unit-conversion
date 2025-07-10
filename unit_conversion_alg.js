let unitType = "Length";
function convertUnits(){ 
    if(document.getElementById('display1').value.trim() === ''){
        alert("Please enter a value.");
        return;
    }
    const value = parseFloat(document.getElementById('display1').value);
    const fromUnit = document.getElementById('unit-select1').value;
    const toUnit = document.getElementById('unit-select2').value;
    if (isNaN(value) || (value < 0 && unitType !== "Temperature")) {
        document.getElementById('display2').value = "Invalid input";
        return;
    }
    let result;
    if(unitType === "Length"){
        const toMeters = {
            'Millimetres': 0.001,
            'Centimeters': 0.01,
            'Meters': 1,
            'Kilometers': 1000,
            'Miles': 1609.34,
            'Feet': 0.3048,
            'Inches': 0.0254,
            'Yards': 0.9144
        };

        const valueInMeters = value * toMeters[fromUnit];
        result = valueInMeters / toMeters[toUnit];
    
    }
    if(unitType === "Weight"){
        const toGrams = {
            'Milligrams': 0.001,
            'Grams': 1,
            'Kilograms': 1000,
            'Metric Tons': 1000000,
            'Pounds': 453.592,
            'Ounces': 28.3495
        };

        const valueInGrams = value * toGrams[fromUnit];
        result = valueInGrams / toGrams[toUnit];
    }
    if(unitType === "Temperature"){
        if (fromUnit === toUnit) {
            result = value; 
        } 
        let valueInKelvin;
        if(fromUnit === 'Celsius') {
            valueInKelvin = value + 273.15;
        }else if(fromUnit === 'Fahrenheit') {
            valueInKelvin = (value - 32) * 5/9 + 273.15;
        } else if(fromUnit === 'Kelvin') {
            valueInKelvin = value;
        }
        if(toUnit === 'Celsius') {
            result = valueInKelvin - 273.15;
        } else if(toUnit === 'Fahrenheit') {
            result = (valueInKelvin - 273.15) * 9/5 + 32;
        } else if(toUnit === 'Kelvin') {
            result = valueInKelvin;
        }
    }
    if(unitType === "Time"){
        const toSeconds = {
            'Milliseconds': 0.001,
            'Seconds': 1,
            'Minutes': 60,
            'Hours': 3600,
            'Days': 86400,
            'Weeks': 604800,
            'Months': 2629800, 
            'Years': 31557600 
        };

        const valueInSeconds = value * toSeconds[fromUnit];
        result = valueInSeconds / toSeconds[toUnit];
    }
    if(unitType === "Area"){
        const toSquareMeters = {
            'Square Millimeters': 0.000001,
            'Square Centimeters': 0.0001,
            'Square Meters': 1,
            'Square Kilometers': 1000000,
            'Acres': 4046.86,
            'Hectares': 10000
        }
        const valueInSquareMeters = value * toSquareMeters[fromUnit];
        result = valueInSquareMeters / toSquareMeters[toUnit];
    }
    if(unitType === "Volume"){
        const toCubicMeters = {
            'Milliliters': 0.000001,
            'Liters': 0.001,
            'Cubic Meters': 1,
            'Cubic Centimeters': 0.000001,
            'Cubic Inches': 0.0000163871,
            'Cubic Feet': 0.0283168,
            'Gallons': 0.00378541
        }
        const valueInCubicMeters = value * toCubicMeters[fromUnit];
        result = valueInCubicMeters / toCubicMeters[toUnit];
    }
    document.getElementById('display1').value = value+ ' ' + fromUnit;
    document.getElementById('display2').value = result+ ' ' + toUnit; 
}
function swapUnits(){
    const select1 = document.getElementById('unit-select1');
    const select2 = document.getElementById('unit-select2');
    const tempValue = select1.value;
    select1.value = select2.value;
    select2.value = tempValue;
    convertUnits();
}
function Weight(){
    unitType = "Weight";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Milligrams">Milligrams</option>
        <option value="Grams">Grams</option>
        <option value="Kilograms">Kilograms</option>
        <option value="Metric Tons">Metric Tons</option>
        <option value="Pounds">Pounds</option>
        <option value="Ounces">Ounces</option>
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Milligrams">Milligrams</option>
        <option value="Grams">Grams</option>
        <option value="Kilograms">Kilograms</option>
        <option value="Metric Tons">Metric Tons</option>
        <option value="Pounds">Pounds</option>
        <option value="Ounces">Ounces</option>
        `;
}
function Length(){
    unitType = "Length";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Millimetres">Millimetres</option>
        <option value="Centimeters">Centimeters</option>
        <option value="Meters">Meters</option>
        <option value="Kilometers">Kilometers</option>
        <option value="Miles">Miles</option>
        <option value="Feet">Feet</option>
        <option value="Inches">Inches</option>
        <option value="Yards">Yards</option>
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Millimetres">Millimetres</option>
        <option value="Centimeters">Centimeters</option>
        <option value="Meters">Meters</option>
        <option value="Kilometers">Kilometers</option>
        <option value="Miles">Miles</option>
        <option value="Feet">Feet</option>
        <option value="Inches">Inches</option>
        <option value="Yards">Yards</option>
        `;
}
function Temperature(){
    unitType = "Temperature";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
        `;
}
function Time() {
    unitType = "Time";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Milliseconds">Milliseconds</option>
        <option value="Seconds">Seconds</option>
        <option value="Minutes">Minutes</option>
        <option value="Hours">Hours</option>
        <option value="Days">Days</option>
        <option value="Weeks">Weeks</option>
        <option value="Months">Months</option>
        <option value="Years">Years</option>
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Milliseconds">Milliseconds</option>
        <option value="Seconds">Seconds</option>
        <option value="Minutes">Minutes</option>
        <option value="Hours">Hours</option>
        <option value="Days">Days</option>
        <option value="Weeks">Weeks</option>
        <option value="Months">Months</option>
        <option value="Years">Years</option>
        `;
}
function Area() {
    unitType = "Area";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Square Millimeters">Square Millimeters</option>
        <option value="Square Centimeters">Square Centimeters</option>
        <option value="Square Meters">Square Meters</option>
        <option value="Square Kilometers">Square Kilometers</option>
        <option value="Acres">Acres</option>
        <option value="Hectares">Hectares</option>
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Square Millimeters">Square Millimeters</option>
        <option value="Square Centimeters">Square Centimeters</option>
        <option value="Square Meters">Square Meters</option>
        <option value="Square Kilometers">Square Kilometers</option>
        <option value="Acres">Acres</option>
        <option value="Hectares">Hectares</option>
        `;
}
function Volume() {
    unitType = "Volume";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Milliliters">Milliliters</option>
        <option value="Liters">Liters</option>
        <option value="Cubic Meters">Cubic Meters</option>
        <option value="Cubic Centimeters">Cubic Centimeters</option>
        <option value="Cubic Inches">Cubic Inches</option>
        <option value="Cubic Feet">Cubic Feet</option>
        <option value="Gallons">Gallons</option>
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Milliliters">Milliliters</option>
        <option value="Liters">Liters</option>
        <option value="Cubic Meters">Cubic Meters</option>
        <option value="Cubic Centimeters">Cubic Centimeters</option>
        <option value="Cubic Inches">Cubic Inches</option>
        <option value="Cubic Feet">Cubic Feet</option>
        <option value="Gallons">Gallons</option>
        `;
}
