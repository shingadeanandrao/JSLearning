const headingElement = document.querySelector("#mainHeading");
headingElement.addEventListener('mouseover',()=>{
   headingElement.style.color = 'green';
})


const techStack = document.querySelector("#techStack");
techStack.style.color= 'red';

const listElement=document.querySelector('#list');
const listItem = document.querySelector("#agile");
listElement.removeChild(listItem);