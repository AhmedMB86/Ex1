// Get main view 
const list = document.querySelector('.list');

let frag = document.createDocumentFragment();

for(let i=0 ; i <= 8; i++){
    const li = document.createElement('li');
    li.className ='item';
    frag.appendChild(li);
//     li.addEventListener('click',function(){
//         li.style.backgroundColor='red';
function randomcolor(){
    return Math.floor(Math.random()*number);
}

 }

li.addEventListener('click',function(e){
let color =`rgb()${randomcolor(255)},${randomcolor(255)},
${randomcolor(255)})`;
    if(e.target.matches('li')){
        console.log('hi');
        e.target.style.backgroundColor='red';
    }
});
list.appendChild(frag);