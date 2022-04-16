const students= [
   {
    name: 'Rohit',
    age: 19,
    weight: 55,
    gender: 'male',
    height: 155
   },
   {
    name: 'Anjali',
    age: 19,
    weight: 45,
    gender: 'female',
    height: 125
   },
   {
    name: 'vansh',
    age: 20,
    weight: 162,
    gender: 'male',
    height: 165
   },
   {
    name: 'vikram',
    age: 22,
    weight: 60,
    gender: 'male',
    height: 150
   },
   {
    name: 'Manshi',
    age: 20,
    weight: 65,
    gender: 'female',
    height: 148
   },
];
//Get an array of all name
let names= students.map(student=> student.name)
console.log(names)


//Get an array of all name and height property 
let heightAndName= students.map(ch=>{
   return {
      name: ch.name,
       height: ch.height
   }
})
console.log(heightAndName)


//Get the total height of the all character        (new method)
let height= students.reduce((prevHeight,ch)=>{
   return prevHeight + ch.height
},0)
console.log(height)


//Get name which have greater mass than 100
const mass= students.filter(ch=> {
   return ch.weight>100
})
console.log(mass)


//Get all the male character
const male= students.filter(ch=>{
   return ch.gender== 'male'
})
console.log(male)


//Sort by name
let sortName= students.sort((ch1,ch2)=>{
   if(ch1.name<ch2.name)
   return -1;
   if(ch1.name>ch2.name)
   return 1;
})
console.log(sortName)


//Sort by gender                  (New method)
let sortGender= students.sort((ch1,ch2)=>{
   if(ch1.gender>ch2.gender)
   return -1;
   if(ch1.gender<ch2.gender)
   return 1;
})
console.log(sortGender)


//does every character have mass greater than 45       (New method)
console.log(students.every((ch)=>ch.weight > 40))


//is there at least one male character?          (New method)
console.log(students.some((ch)=> ch.gender== 'male'))
