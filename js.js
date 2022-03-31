Array.from(document.querySelectorAll('li'))[1].innerHTML = "Granny Smith Apples";
Array.from(document.querySelectorAll('li'))[3].remove();

const newLI = document.createElement('li');
newLI.innerHTML = "Kombucha";
document.querySelector('ul').appendChild(newLI);


Array.from(document.querySelectorAll('ul'))[0].remove();

let data = ['Ram', 'Shyam', 'Sita', 'Gita' ];
  
let list = document.createElement("li");
  
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})
