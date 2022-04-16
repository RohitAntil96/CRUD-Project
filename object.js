// const course={
//     lecture: 20,
//     section:3,
//     title: 'coding',
//     notes: {
//         introduction: 'welcome to the course'             //another object
//     },
//     enroll() {
//         console.log('you have been sucessfully registered')      //function
//     }
// }
// course.enroll()
// console.log(course)
// course.price= 456                    //inside function we change in constant data type

//---------------------Factory function--------------
function createCourse(title) //use camelCase for naming
{
return {
    section: title,
    title: 'coding',
    enroll() {
        console.log('you have been sucessfully registered')      //function
    }
}
}
const course= createCourse('js');
console.log(course)

//----------------------Constructor----------
function Course(title) //use pascale case for naming(start from capital word)
{
         this.title= title,
         this.enroll= function() {
            console.log('you have been sucessfully registered');  
         }
}
const course1= new Course('welcome in js')
delete course1.title
course1.enroll()
console.log(course1)