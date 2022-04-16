 const array = [1,2,3,4,5,6,7,8,9]          //array representation
 console.log(array)
 console.log(array[array.length-1])

 //push                insert in the end
 console.log(array.push(10))
 console.log(array)

 //unshift            insert in the begning
 console.log(array.unshift(0))
 console.log(array)

 //pop                remove from end
 console.log(array.pop())
 console.log(array)

 //shift             remove from starting
 console.log(array.shift())
 console.log(array)

 //insert anything on any index where it is int,string
 array[1]= 'rohit';
 console.log(array)

 const list= ['rohit','vikram','vansh','anjali','rohit','manshi','sourav']
 console.log(list)

 //indexof       to search from start(give first occurance of the element)
 console.log(list.indexOf('vikram'))

 //lastindexof       to search from end(give last occurance of the element)
 console.log(list.lastIndexOf('rohit'))

 //include              give true or false if element present or not
 console.log(list.includes('vansh'))
 console.log(list.includes('vansh',3))            //3 k baad koi vansh nhi hai

 //these function are only used for primitive data type cannot used for reference data types(in object)

 let list1= ['rohit','sachin','ajay','sagar']
 let list2= ['aman','ravinder','gourav']
 let list3= list1.concat(list2)                     //concatination of two array
 console.log(list3)

 console.log(list3.slice(2,5))          //2 se 5 tkk value rhe ghi baki delete hojae ghe

 //spread operator(...)
 let names3=[...list1,...list2]          //another method to concat of arrays
console.log(names3)

//for loop
console.log('for loop-------')
for(let i=0;i<list.length;i++)
console.log(list[i])

//for of loop
console.log('forOf loop-------')
for(let key of list1)
console.log(key)

//for each loop
console.log('forEach loop-------')
list2.forEach(function(name,index){
    console.log(name,index)
})

//join method
let topper= ['R','o','h','i','t']
console.log(topper.join())
console.log(topper.join(''))
console.log(topper.join('_'))

//filter method     find method bss first occurance deta tha ye sbb occurance dega
let cities = [
    {name: 'Gurgaon', population: 3284768},
    {name: 'U.P', population: 8584760},
    {name: 'Delhi', population: 2884766},
    {name: 'Haryana', population: 1884760},
    {name: 'Punjab', population: 2784762},
    {name: 'Hyderabad', population: 4584762}
]
console.log(cities.filter(city=> city.population>3000000))

//map method   to perform any operation
console.log(cities.map(city=> city.population/2))

