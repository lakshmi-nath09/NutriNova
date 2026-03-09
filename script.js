let totalCalories = 0;

function calculate(){

let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let age = document.getElementById("age").value;
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

document.getElementById("calories").innerText = "Daily Calories Needed: " + Math.round(calories);

let meals;

if(goal === "Weight Loss"){
meals = "Breakfast: Oatmeal (250 cal)\nLunch: Grilled Chicken Salad (400 cal)\nDinner: Vegetable Soup (300 cal)";
}

else if(goal === "Weight Gain"){
meals = "Breakfast: Peanut Butter Toast (400 cal)\nLunch: Rice + Chicken (600 cal)\nDinner: Pasta (500 cal)";
}

else{
meals = "Breakfast: Smoothie (300 cal)\nLunch: Brown Rice + Vegetables (450 cal)\nDinner: Soup + Salad (350 cal)";
}

if(craving === "Sweet"){
meals += "\nSnack: Dark Chocolate or Fruit Yogurt";
}

if(craving === "Spicy"){
meals += "\nSnack: Spicy Chickpea Salad";
}

if(craving === "Fast Food"){
meals += "\nHealthy Alternative: Whole Wheat Veg Burger";
}

document.getElementById("meals").innerText = meals;

generateWeeklyPlan();

}

function generateWeeklyPlan(){

let table = document.getElementById("mealPlan");

let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

let breakfast = ["Oats","Smoothie","Egg Toast","Pancakes","Fruit Bowl","Yogurt","Omelette"];
let lunch = ["Chicken Salad","Brown Rice","Quinoa Bowl","Veg Wrap","Grilled Fish","Rice + Dal","Veg Pasta"];
let dinner = ["Soup","Grilled Veggies","Salad","Chicken Bowl","Veg Curry","Steamed Veg","Light Pasta"];

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

document.getElementById("totalCalories").innerText = "Total Calories: " + totalCalories;

}
