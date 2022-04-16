
//Getter function
const square= {
    side: 10,
    get area(){
        return this.side*this.side;
    }
}

console.log(square.area)

const square1= {
    side: 10,
    get area(){
        return this.side** 2;          //another method
    }
}
square.side= 20
console.log(square.area)


// Applying join function(concat)
function stringConcat(seprator, ...strings){
    let result= ''
    strings.forEach((string,i)=>{
        if(i== strings.length-1){
            result+= string;
        }
        else{
            result+= string+ seprator;
        }
    })
    return result;
}
console.log(stringConcat('-', 'how','are','you'))

//Restructuring method                             (New method)

//simple
let arr= [1,2,3,4,5,6,7,8]

let first= arr[0];
let second= arr[1];
let third= arr[2];
let other= arr.slice(3);
console.log(first)
console.log(second)
console.log(third)
console.log(other)

//Restructure method
let [first1,second1,third1,...others]= [11,12,13,14,15,16,17,18]
console.log(first1)
console.log(second1)
console.log(third1)
console.log(others)


//Matchstics question
function count(houses){
    if(houses<=0)
    return 0;
    else
    return (houses*6)-(houses-1);
}

console.log(count(4))
console.log(count(1))
console.log(count(87))
console.log(count(0))