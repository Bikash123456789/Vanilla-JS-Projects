const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.value');
let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target.classList);
        if(e.target.classList.contains('dec')){
            count--;
            value.style.color = 'red';
        }
        else if(e.target.classList.contains('inc')){
            count++;
            value.style.color = 'green';
        }
        else{
            count = 0;
            value.style.color = 'black';
        }
        value.innerHTML = count
        
    })
})