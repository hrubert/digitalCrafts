// slow way

var course = new Object();
course.title = "Digital Crafts 16 Week Bootcamp";
course.instructor = "Veronica Lino";
course.level = 1;
course.published = true;
course.views = 0;

// using a constructor function

function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;  
}

// delete a property from an object
var course1 = new Course("Cat time", "Tracy", 23, true, 0);

delete course1['title'];
console.log(course1);

// for in -- looping through an object

for (var attribute in person) {
    var value = person[attribute];
    console.log(`${attribute}: ${value}`);
  }