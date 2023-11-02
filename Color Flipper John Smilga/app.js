const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn');
const value = document.querySelector('.value');

btn.addEventListener('click',()=>{
    let randNum = randomNum();
    console.log(randNum)
    document.body.style.backgroundColor = colors[randNum];
    value.innerHTML = colors[randNum];
})

function randomNum(){
    return Math.floor(Math.random()*colors.length)
}