let samTargetSavings = 10000; //I tried changing values to check if the formula is correct. Fortunately I got it I think.
let samCurrentSavings = 7500;

let savingsDifference = (samTargetSavings - samCurrentSavings);
let differencePercentage = (savingsDifference/samTargetSavings*100);

console.log('Thank you for your discipline and hardwork, Sam! You are now ' + differencePercentage + '% away from your goal of saving ₱' + samTargetSavings + '.');
