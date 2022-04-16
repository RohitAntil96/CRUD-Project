var bread= prompt('which bread you want to take?');
var veggies= prompt('which types of veggies you want to take?');
var sauce= prompt('which sauce you want to take?');

function makeSandwitch(bread,veggie,sauce){
    var sandwitch= bread+ " bread " + veggies+" "+ sauce+" sandwich";
    return sandwitch;
}

console.log(makeSandwitch(bread,veggies,sauce));
