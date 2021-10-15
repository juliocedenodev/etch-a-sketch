const container = document.getElementById("container");
const btnReset = document.getElementById("reset").onclick = resize;
const btnBlack = document.getElementById("black").onclick = hover;
const btnRainbow = document.getElementById("rainbow").onclick= rainbow;
const btnErase = document.getElementById("erase").onclick = erase;


function makeRows(size) {
    
    container.style.setProperty('--grid', size);
    
    for (let i = 0; i < size; i++) {
        for (let j= 0; j < size; j++) {

       let cell = document.createElement("div");
       container.appendChild(cell).className = "grid-item";
        }
    }
    let cellDiv = container.querySelector(".grid-item");
    cellDiv.style.width = (500/size) + 'px'
    cellDiv.style.height = (500/size) + 'px'
}


makeRows(16);


function hover()
{
    container.addEventListener('mouseover', (e) => {
        if(e.target && e.target.matches(".grid-item"))
        {
            e.target.style.backgroundColor = 'black';
        }
    });
}
function erase()
{
    container.addEventListener('mouseover', (e) => {
        if(e.target && e.target.matches(".grid-item"))
        {
            e.target.style.backgroundColor = 'white';
        }
    });
}

function rainbow()
{
    container.addEventListener('mouseover', (e) => {
        if(e.target && e.target.matches(".grid-item"))
        {
            const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
            e.target.style.backgroundColor = rndCol;
        }
    });
}

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
function resize(size)
{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    size = prompt("Write the grid size");
    while(isNaN(size) || size < 0 || size > 100){
        size = parseInt(prompt('Pick a number between 1 and 100'));
    }
    makeRows(size);
}
