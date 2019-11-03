var fizz = 1
for(var i = 1; i <= 100; i++){
  if(i % 15 === 0){
    addCircles('FIZBUZZ');
    fizz += i;
   }
  else if(i % 3 === 0){
  addCircles('FIZZ');
  fizz += i;
 }
  else if(i % 5 === 0){
  addCircles('BUZZ');
  fizz += i;
 }
  else {
   addCircles(i);
 }
}

function addCircles(content){ 
  // create element
  var newEl = document.createElement('div');
  //customize the element

  // get future parent
  // append new element to parent
  newEl.innerText = content;
  newEl.classList.add('circles');
  var circleList = document.getElementById('fizzbuzz-container');
  // get future parent
  // append new element to parent
  circleList.appendChild(newEl);
}