//define variables
var teacher= "Mr. Vincent VanGogh ";
var department= "Art";
var teacherRatings= [];
var avgRating =0;
//var avgRating= (rating[0] +rating[1]+rating[2])/3;

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



//take user rating input, add to rating array, and output  new average as alert
var newRating= parseFloat(window.prompt("Please rate your professor between 0.0 - 5.0:"));

while(newRating <= 0.0 || newRating >= 5.0)
{
var newRating= parseFloat(window.prompt("Please make your rating between 0.0 - 5.0:"));
}

addTeacherRating(teacherRatings, newRating);

//define rounded variable to tenth place
var roundedAvgRating= Math.round(10*getRatingAvg(teacherRatings))/10;

alert("Thanks for rating " + teacher + " a " + newRating);

//addTeacherRating(teacherRatings, newRating);
alert(teacher + " now has an average rating of: " + roundedAvgRating);

//print output of variables and ratings to console
console.log("Teacher: ", teacher,
"\nDepartment: " , department,
"\nRatings: ", teacherRatings,
"\n Avg Rating: ", roundedAvgRating);

var courses=[ "Interpersonal Communication 103", "Psychology 101", "Yoga 200"];
var gpa= 4.0;
var email= "lovinTrees@yahoo.com";
console.log("Courses:", courses, "\n GPA:", gpa, "\n Email:", email);
