let caloriesPerHour = 450;
let numDaysOfExercise = 15; //I made it exercise because it's confusing. First statement says Sam is cycling but 2nd statement says Sam is running.
let hrsPerDay = 0.5;

let totalHrsOfExercise = (numDaysOfExercise * hrsPerDay);
let totalCaloriesBurned = (totalHrsOfExercise * caloriesPerHour);

console.log('Great work, Sam! After ' + hrsPerDay + ' of running every day for a week, you may lose a total of ' + totalCaloriesBurned + ' calories.');
