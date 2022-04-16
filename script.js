let butt= document.querySelector('button');
// butt.addEventListener('click', showMsg);
// function showMsg(){
//     alert("Learning World!");
// }
butt.addEventListener('click', inputMsg);
function inputMsg(){
    let name= prompt('Enter your changes:');
    butt.textContent= name + 'Rohit';
}