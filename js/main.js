//create teacher object
function Teacher(name, department, teacherRatings, photoSource)
{
this.name= name;
this.department= department;
this.teacherRatings= teacherRatings;
this.photoSource= photoSource;
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
var teachers = [
new Teacher("Mr. Vincent VanGogh", "Art",[2.4, 3.6, 4.5], "images/Teacher_Photos/vanGogh.jpg"),
new Teacher("Mr. Edward Degas", "Science", [2.4, 3.6, 4.5], "images/Teacher_Photos/Degas.jpg"),
new Teacher("Mr. Claude Monet", "Psychology", [2.4, 3.6, 4.5], "images/Teacher_Photos/Monet.jpg"),
new Teacher("Mr. Pablo Picasso", "Math", [2.4, 3.6, 4.5], "images/Teacher_Photos/Picasso.jpg"),
new Teacher("Ms. Georgia O'Keefe", "Literature", [2.4, 3.6, 4.5], "images/Teacher_Photos/O'Keefe.jpg"),
new Teacher("Ms. Frida Kahlo", "Foreign Language",  [2.4, 3.6, 4.5], "images/Teacher_Photos/Kahlo.jpg"),
]
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
  new Course ("Interpersonal Communication 103", "Social Science", teachers[1].name, "Fall"),
  new Course ("Psychology 101", "Social Science", teachers[2].name, "Spring"),
  new Course ("Yoga 200", "Philosophy", teachers[3].name, "Fall"),
  new Course ("Biochemistry 307", "Science", teachers[4].name, "Fall"),
  new Course ("HTML", "Computer", teachers[5].name, "Spring"),
  new Course ("CSS", "Computer", teachers[0].name, "Spring"),
  new Course ("Algebra 101", "Math", teachers[0].name, "Fall"),
  new Course ("Watercolors 203", "Art", teachers[1].name, "Fall"),
  new Course ("English Composition 101", "Writing", teachers[2].name, "Spring"),
  new Course ("German 301", "Foreign Language", teachers[3].name, "Fall"),
  new Course ("Tibetan Debate 400", "Foreign Language", teachers[4].name, "Spring"),
  new Course ("Modern American Lit", "Literature", teachers[5].name, "Fall"),
  new Course ("Kickboxing 100", "Physical Education", teachers[2].name, "Spring"),
  new Course ("Figure Drawing 203", "Art", teachers[0].name, "Spring"),
  new Course ("Calculus 203", "Math", teachers[1].name, "Spring"),


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


/*
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

*/

function filterCourses(courses, department, semester)
{
  var filteredCourses = [];
  for ( var i=0; i<courses.length; i++)
  {
    if (department == courses[i].department.toLowerCase() && semester==courses[i].semester.toLowerCase())
    {
      filteredCourses.push(courses[i]);
      console.log("Filtered: "+ filteredCourses);
    }
  }
  return filteredCourses;
}


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
//template literal string, add courses on load of page, :
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

//filter courses by semester and department
var deptSearch= "";
var semesterSearch="";


$('.filterButton').click(function(){
  deptSearch= $('.selectDeptDrop').val().toLowerCase();
  semesterSearch= $('.selectSemesterDrop').val().toLowerCase();
  console.log(deptSearch);
  console.log(semesterSearch);
  filteredCourses=filterCourses(courses, deptSearch, semesterSearch);
  $('.courseBoxes').empty();
  updateCourseDisplay(filteredCourses);
});
//add teacher profiles on page loading:
function updateTeacherDisplay(teachers){
  for ( var i=0; i<teachers.length; i++)
  {
    var teacherDisplayed =
`
<div class="teacherProfile">
  <div class="topSection">
    <div class="topLeft">
      <img class="teacherPhoto" src="${teachers[i].photoSource}" alt="Professor's Picture">
    </div>
    <div class="topRight">
      <h2>${teachers[i].name}</h2>
      <h3>${teachers[i].department}</h3>
    </div>
  </div>

  <div class="bottomSection">
  <div class="bottomSectionLeft">
    <h3>Courses</h3>
    <h4>Bridge Architecture</h4>
    <h4>Lilly Gardening</h4>
  </div>
  <div class="bottomSectionRight">
    <h3>Rating</h3>
    <h4>${teachers[i].getRatingAvg(teachers[i].teacherRatings)}</h4>
  </div>
</div>
</div>
`;

$('.teacherBoxes').append(teacherDisplayed);
  }
}
updateTeacherDisplay(teachers);
//Make teacher ratings interactive



$(".teacherProfile").click(function(){
        $(".panelToRate").slideDown("fast");
        $(".panelToRate").css('display', 'flex');
    });

$(".closeThisBox h4").click(function(){
            $(".panelToRate").hide("fast");
      });


});
