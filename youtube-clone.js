const moreBtn = document.querySelector('.info .metadata .titleandbutton .title');
const title = document.querySelector('.info .metadata .title');
function myToggle(){
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
}
console.log("aa");
console.log(moreBtn);
moreBtn.onClick = myToggle;

