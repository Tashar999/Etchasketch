const container = document.querySelector('.container');
const btn = document.getElementById('btn')
num = 0

function grid(){
    container.innerHTML = "";
    let num = prompt('How many squares do you want the grid to be?');
    if (num > 100 || num < 0){
        alert('gotta be 1-100 man')
    } else {
    for (let i = 0; i < num * num; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.style.width = 960/num + "px"
    div.style.height = 960/num + "px"
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "red";
            })}
}}
