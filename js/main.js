//define variables
var teacher= "Mr. Vincent VanGogh ";
var department= "Art";
var teacherRatings= [2.4, 3.6, 4.5];
var avgRating =0;

//function to make an average of ratings with an array input
function getRatingAvg(input)
{
  var ratingsSum=0;
  for ( var i=0; i<input.length; i++)
  {
    ratingsSum += input[i];
  }
  avgRating= ratingsSum/input.length;
  return avgRating;
}

//function to add a new rating into an array
function addTeacherRating(someArray, newRating)
{
teacherRatings.push(newRating);
return teacherRatings;
}

/*

//take user rating input, add to rating array, and output  new average as alert
var newRating= parseFloat(window.prompt("Please rate your professor between 0.0 - 5.0:"));

while(newRating <= 0.0 || newRating >= 5.0)
{
var newRating= parseFloat(window.prompt("Please make your rating between 0.0 - 5.0:"));
}



//define rounded variable to tenth place


alert("Thanks for rating " + teacher + " a " + newRating);

addTeacherRating(teacherRatings, newRating);
var roundedAvgRating= Math.round(10*getRatingAvg(teacherRatings))/10;
alert(teacher + " now has an average rating of: " + roundedAvgRating);

//print output of variables and ratings to console
console.log("Teacher: ", teacher,
"\nDepartment: " , department,
"\nRatings: ", teacherRatings,
"\n Avg Rating: ", roundedAvgRating);

var courses=[
  ["Interpersonal Communication 103", "social sciences"],
  ["Psychology 101", "social sciences"],
  ["Yoga 200", "philosophy"],
  ["Biochemistry 307", "science"],
  ["HTML", "computer"],
  ["CSS", "computer"],
];

console.log("Courses: " + courses);
//var department= window.prompt("In which department are you searching for a course?").toLowerCase();

var filteredCourses= [];

function filterCourses(courses, department)
{
  for ( var i=0; i<courses.length; i++)
  {
    if (department==courses[i][1])
    {
      filteredCourses.push(courses[i][0]);
    }
  }
}
var department= window.prompt("In which department are you searching for a course?").toLowerCase();

while (department != "science" && department != "computer" &&
department != "art" && department != "language" &&
 department != "philosophy" && department != "social sciences" )
 {
var department= window.prompt("Please enter a valid school department:").toLowerCase();
}

filterCourses(courses, department);
alert("These courses are in the " + department + " department: " + filteredCourses);
console.log("Courses: " + filteredCourses);

*/

var gradYear= window.prompt("What is your undergrad COLLEGE graduation year?");

while (gradYear < 1900 || gradYear > 2040)
{
  var gradYear= window.prompt("Hey, highschooler or college student, please enter a valid COLLEGE graduation year:");
}

var gradMonth= window.prompt("What is your COLLEGE graduation month?").toLowerCase();

while (gradMonth!= "may" && gradMonth != "december")
{
  var gradMonth= window.prompt("Please enter a valid graduation month, May or December:");
}


//anonymous functions to alert welcoming classes
var welcomeCollegeStudent = function (studentClass)
{
  alert("Welcome, " + studentClass + "! ");
}

var welcomeHsStudent = function (studentClass)
{
  alert("You're still a " + studentClass + " in high school! ");
}

var welcomeCollegeGrad = function (studentClass)
{
  alert("You're already a " + studentClass + "!");
}

var welcomeYoungOne = function (studentClass)
{
  alert("You're still younger than in high school! ");
}


/*if (gradYear <2022)
{
  welcomeCollegeStudent("freshman");
}
else if (gradYear >= 2022)
{
  welcomeHsStudent("freshman");
}
*/
var studentClass = "";

function welcomeStudentsByGraduatingClass(gradMonth, gradYear)
{
  if (gradYear== 2018 && gradMonth== "may" || gradMonth== "december")
  {
    studentClass = "senior";
    welcomeCollegeStudent(studentClass);
  }
  else if (gradYear== 2019 && gradMonth== "may" || gradMonth== "december")
  {
    studentClass = "junior";
    welcomeCollegeStudent(studentClass);
  }
  else if (gradYear== 2020 && gradMonth== "may" || gradMonth== "december")
  {
    studentClass = "sophomore";
    welcomeCollegeStudent(studentClass);
  }
  else if (gradYear== 2021 && gradMonth== "may" || gradMonth== "december")
  {
    studentClass = "freshman";
    welcomeCollegeStudent(studentClass);
  }
  else if (gradYear == 2022 && gradMonth == "may" || gradMonth == "december")
  {
    studentClass = "senior";
    welcomeHsStudent(studentClass);
  }
  else if (gradYear== 2023 && gradMonth== "may" || gradMonth== "december")
  {
    studentClass = "junior";
    welcomeHsStudent(studentClass);
  }
  else if (gradYear== 2024 && gradMonth== "may" || gradMonth== "december")
  {
    studentClass = "sophomore";
    welcomeHsStudent(studentClass);
  }
  else if (gradYear== 2025 && gradMonth== "may" || gradMonth== "december")
  {
    studentClass = "freshman";
    welcomeHsStudent(studentClass);
  }
  else if (gradYear< 2018)
  {
    studentClass = "college grad";
    welcomeCollegeGrad(studentClass);
  }
  else if (gradYear> 2026)
  {
    studentClass = "young one";
    welcomeYoungOne(studentClass);
  }
}

welcomeStudentsByGraduatingClass(gradMonth, gradYear);
