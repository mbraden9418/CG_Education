//create teacher object
function Teacher(name, department, teacherRatings)
{
this.name= name;
this.department= department;
this.teacherRatings= teacherRatings;
}

//add prototype functions to all teachers
Teacher.prototype = {
  addTeacherRating: function (someArray, newRating)
      {
          this.teacherRatings.push(newRating);
          return this.teacherRatings;
      },
  getRatingAvg: function (teacherRatings)
    {
    var ratingsSum=0;
    for ( var i=0; i<this.teacherRatings.length; i++)
    {
      ratingsSum += this.teacherRatings[i];
    }
    avgRating= ratingsSum/this.teacherRatings.length;
    return avgRating;
    }
}
//create instances of teacher objects
var teacherVanGogh = new Teacher("Mr. Vincent VanGogh", "Art", [2.4, 3.6, 4.5])

var teacherDegas = new Teacher("Mr. Edward Degas", "Science", [2.4, 3.6, 4.5])

var teacherMonet = new Teacher("Mr. Claude Monet", "Psychology", [2.4, 3.6, 4.5])

// create student prototype
function Student(name, major, email, avgGPA, courses)
{
  this.name = name;
  this.major=major;
  this.email= email;
  this.avgGPA = avgGPA;
  this.courses= courses;
}

Student.prototype = {
  addStudentCourse: function (courseToAdd)
      {
          this.courses.push(courseToAdd);
      },

  dropCourse: function (courseToDrop)
      {
        for ( var i=0; i<this.courses.length; i++)
        {
          if (courseToDrop==this.courses[i])
          {
            delete this.courses[i];
          }
        }
      },
    changeMajor: function (newMajor)
    {
      this.major= newMajor;
    },

}
//create instance of student object
var studentFriendlyGiraffe = new Student ("Friendly Giraffe", "Psychology",
"lovinTrees@yahoo.com", "4.0", ["Interpersonal Communication 103", "Psychology 101", "Yoga 200"]);

//test student object functions
studentFriendlyGiraffe.addStudentCourse("Calculus 203");
studentFriendlyGiraffe.dropCourse("Psychology 101");
studentFriendlyGiraffe.changeMajor("Biology");

console.log(studentFriendlyGiraffe.name + " new student major: " + studentFriendlyGiraffe.major + " \n and new courses: " + studentFriendlyGiraffe.courses);


//create course objects
function Course(name, department, teacher, semester) {
    this.name = name;
    this.department = department;
    this.teacher = teacher;
    this.semester = semester;
}

var courses = [
  new Course ("Interpersonal Communication 103", "Social Science", teacherMonet.name, "Fall"),
  new Course ("Psychology 101", "Social Science", teacherDegas.name, "Spring"),
  new Course ("Yoga 200", "Philosophy", teacherVanGogh.name, "Fall"),
  new Course ("Biochemistry 307", "Science", teacherMonet.name, "Fall"),
  new Course ("HTML", "Computer", teacherMonet.name, "Spring"),
  new Course ("CSS", "Computer", teacherDegas.name, "Spring"),
  new Course ("Algebra 101", "Math", teacherDegas.name, "Fall"),
  new Course ("Watercolors 203", "Art", teacherMonet.name, "Fall"),
  new Course ("English Composition 101", "Writing", teacherDegas.name, "Spring"),
  new Course ("African American Lit 301", "Literature", teacherDegas.name, "Spring"),
];



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
return teacher.teacherRatings;
}



//take user rating input and verify it is valid
var newRating= parseFloat(window.prompt("Please rate your professor between 0.0 - 5.0:"));

while(newRating <= 0.0 || newRating >= 5.0)
{
var newRating= parseFloat(window.prompt("Please make your rating between 0.0 - 5.0:"));
}



//define rounded variable to tenth place


alert("Thanks for rating " + teacherMonet.name + " a " + newRating);

teacherMonet.addTeacherRating(teacherMonet.teacherRatings, newRating);

alert(teacherMonet.name + " now has ratings of: " +  teacherMonet.teacherRatings);

var roundedAvgRating= Math.round(10 * teacherMonet.getRatingAvg(teacherMonet.teacherRatings))/10;

alert(teacherMonet.name + " now has an average rating of: " + roundedAvgRating);

//print output of variables and ratings to console
console.log("Teacher: ", teacherMonet.name,
"\nDepartment: " , teacherMonet.department,
"\nRatings: ", teacherMonet.teacherRatings,
"\n Avg Rating: ", roundedAvgRating);



function filterCourses(courses, department)
{
  var filteredCourses = [];
  for ( var i=0; i<courses.length; i++)
  {
    if (department == courses[i].department.toLowerCase())
    {
      filteredCourses.push(courses[i].name);
    }
  }
  return filteredCourses;
}

var department= window.prompt("In which department are you searching for a course?").toLowerCase();

while (department != "science" && department != "computer" &&
department != "art" && department != "language" &&
 department != "philosophy" && department != "social science"
&& department != "math" && department != "history")
 {
var department= window.prompt("Please enter a valid school department:").toLowerCase();
}

var filteredCourses = filterCourses(courses, department);
alert("These courses are in the " + department + " department: " + filteredCourses);
console.log("Courses: " + filteredCourses);


//prompt user for grad year and month, check validity
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


//determine student graduating classes and welcome
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

$(document).ready(function(){

  var deptSearch= "";
  var semesterSearch="";

var filteredCourses = filterCourses(courses, deptSearch);
  $('.filterButton').click(function(){

    deptSearch= $('.selectDeptDrop').val();
    semesterSearch= $('.selectSemesterDrop').val();
    console.log(deptSearch);
    console.log(semesterSearch);
    filterCourses(courses, deptSearch);
    console.log(filteredCourses);
  });

//template literal string
function updateCourseDisplay(courses){
  for ( var i=0; i<courses.length; i++)
  {
    var courseDisplayed =
`
<div class="courseBox">
<div class="leftSection">
  <h4><i>Class: </i>${courses[i].name}</h4>
  <h4><i>Department: </i>${courses[i].department}</h4>
</div>
<div class="rightSection">
  <h4><i>Professor: </i>${courses[i].teacher}</h4>
  <h4><i>Semester: </i>${courses[i].semester}</h4>
</div>
</div>
`;

$('.courseBoxes').append(courseDisplayed);

  }
}
updateCourseDisplay(courses);

});
