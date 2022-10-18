let weightPounds = 101; //Please input here your height and weight
let heightFeet = 5;
let heightInches = 1;


function calculateBMI()
{
    let height = heightFeet * 12 + heightInches;
    let finalHeight = height * height;

    let bmiCompute = weightPounds / finalHeight * 703;
    let BMI = parseFloat(bmiCompute).toFixed(1);

    console.log("BMI = " + BMI);

    if (BMI <= 18.4)
    {
        console.log("Underweight");
    }
    else if ((BMI >= 18.5) && (BMI <= 24.9))
    {
        console.log("Normal");
    }
    else if ((BMI >= 25) && (BMI <= 39.9))
    {
        console.log("Overweight");
    }
    else if (BMI >= 40)
    {
        console.log("Obese");
    }

}

calculateBMI();