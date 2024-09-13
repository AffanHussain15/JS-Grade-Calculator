var english = Number(prompt("Enter your obtained marks in English"));
var urdu = Number(prompt("Enter your obtained marks in Urdu"));
var maths = Number(prompt("Enter your obtained marks in Maths"));
var science = Number(prompt("Enter your obtained marks in Science"));
var physics = Number(prompt("Enter your obtained marks in Physics"));

var totalMarks = 100 * 5;
var obtainedMarks = english + urdu + maths + science + physics;
var getPercentage = (obtainedMarks / totalMarks) * 100;

var grade;

if (getPercentage >= 90) {
    grade = "Grade A+";
} else if (getPercentage >= 80) {
    grade = "Grade A";
} else if (getPercentage >= 70) {
    grade = "Grade B";
} else if (getPercentage >= 60) {
    grade = "Grade C+";
} else if (getPercentage >= 50) {
    grade = "Grade D";
} else {
    grade = "Fail";
}


alert(
  "Marksheet" +
    "\n" +
    "Total Marks: " +
    totalMarks +
    "\n" +
    "Obtained Marks: " +
    obtainedMarks +
    "\n" +
    "Percentage: " +
    getPercentage.toFixed(2) + "%" +
    "\n" +
    grade
);