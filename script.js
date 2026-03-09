let totalCalories = 0;

function calculate(){

let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let goal = document.getElementById("goal").value;
let craving = document.getElementById("craving").value;

height = height / 100;

let bmi = (weight / (height * height)).toFixed(2);

document.getElementById("bmi").innerText = "BMI: " + bmi;

let calories;

if(goal === "Weight Loss"){
calories = weight * 22;
}
else if(goal === "Weight Gain"){
calories = weight * 30;
}
else{
calories = weight * 26;
}

document.getElementById("calories").innerText =
"Recommended Daily Calories: " + Math.round(calories);


let table = document.getElementById("mealTable");

table.innerHTML =
"<tr><th>Meal</th><th>Food</th><th>Calories</th></tr>";

let meals;

if(goal === "Weight Loss"){

meals = [
["Breakfast","Oatmeal","250"],
["Lunch","Grilled Chicken Salad","400"],
["Dinner","Vegetable Soup","300"]
];

}

else if(goal === "Weight Gain"){

meals = [
["Breakfast","Peanut Butter Toast","400"],
["Lunch","Rice + Chicken","600"],
["Dinner","Pasta","500"]
];

}

else{

meals = [
["Breakfast","Smoothie","300"],
["Lunch","Brown Rice + Veggies","450"],
["Dinner","Soup + Salad","350"]
];

}

for(let i=0;i<meals.length;i++){

let row = table.insertRow();

row.insertCell(0).innerText = meals[i][0];
row.insertCell(1).innerText = meals[i][1];
row.insertCell(2).innerText = meals[i][2];

}

generateWeeklyPlan();

}

function generateWeeklyPlan(){

let table = document.getElementById("mealPlan");

table.innerHTML =
"<tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th></tr>";

let days =
["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

let breakfast =
["Oats","Smoothie","Egg Toast","Pancakes","Fruit Bowl","Yogurt","Omelette"];

let lunch =
["Chicken Salad","Brown Rice","Quinoa Bowl","Veg Wrap","Grilled Fish","Rice + Dal","Veg Pasta"];

let dinner =
["Soup","Grilled Veg","Salad","Chicken Bowl","Veg Curry","Steamed Veg","Light Pasta"];

for(let i=0;i<7;i++){

let row = table.insertRow();

row.insertCell(0).innerText = days[i];
row.insertCell(1).innerText = breakfast[i];
row.insertCell(2).innerText = lunch[i];
row.insertCell(3).innerText = dinner[i];

}

}

function addCalories(){

let food = document.getElementById("foodCalories").value;

totalCalories += Number(food);

document.getElementById("totalCalories").innerText =
"Total Calories: " + totalCalories;

}
