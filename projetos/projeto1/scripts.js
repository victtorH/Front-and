const nav= document.querySelector(' .nav-bar')
const opi = document.querySelector('nav')
const h2 = document.querySelector('h2')
var conta=1
var soma=0
opi.addEventListener("click", function clque(){
    if(soma < conta){
    h2.style = '  opacity: 0;'
    opi.style = ' right: 1em; '
    soma++ 
}else{
   
 h2.style = '  opacity: 1;'
opi.style = ' right: -7em; '

conta++
    }

})