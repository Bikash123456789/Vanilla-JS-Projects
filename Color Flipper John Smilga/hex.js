const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.btn');
const value = document.querySelector('.value');

function rand(){
    return Math.floor(Math.random()*hex.length)
}

btn.addEventListener('click',()=>{
    let str = '#';
    for(let i = 1; i<=6 ;i++){
        str = str + hex[rand()]
    }
    console.log(str)
    document.body.style.backgroundColor = str;
    value.innerHTML = str;
})

