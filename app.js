

let color='yellow';

const container=document.querySelector('.container')
 let content = document.createElement('div');

 container.appendChild(content)



function makeGrid(size){
    let rowsElement=content.querySelectorAll('div')
    rowsElement.forEach((div)=>div.remove())


    for(let i=0;i<size;i++){
        const colsElements=document.createElement('div')
       colsElements.classList.add('colsGrid')
        for(let j=0;j<size ;j++){
       const rowsElement=document.createElement('div')
       rowsElement.classList.add('rowsGrid')
       colsElements.appendChild(rowsElement)

       
       rowsElement.addEventListener('mouseenter',changeDivColor)
        }
        content.classList.add('content1');
        content.appendChild(colsElements)
        

    }

    
     
}

function defaultGrid(){
    makeGrid(16)
}

defaultGrid()

let yellowBtn=document.getElementById('yellow1')

yellowBtn.classList.add("yellow")


let silverBtn=document.getElementById('silver1')
silverBtn.classList.add("silver")


let randomBtn=document.getElementById('random1')
randomBtn.classList.add("random")


const resetBtn=document.getElementById('reset1')
resetBtn.classList.add('reset')


function resize(){

    let userInput=prompt('please enter the size of the div')
    if(userInput==''){
       alert( 'Please enter number between 1 and 99')
    }else if (userInput>100)
    {
        alert('Please enter number less than 100')
    }else if(userInput<=0){
        alert('Please enter number between 1 and 99')
    }else{
    makeGrid(userInput)
}
}


const clearBtn=document.createElement('button')
clearBtn.classList.add("cBtn")


function changeDivColor(){
if(color=='yellow')
{
    this.style.backgroundColor='yellow'
}else if(color=='silver'){
    this.style.backgroundColor='silver'
}else if(color=='random'){
    this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`
}

}
 // user choice color
function pickedColor(colorChoice){
   color=colorChoice;

   
}

// to reset the background color
function reset(){
   const resetDiv=document.querySelectorAll('div')
   resetDiv.forEach((div)=>div.style.backgroundColor='white')
}


