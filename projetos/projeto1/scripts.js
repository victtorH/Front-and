const nav= document.querySelector(' .nav-bar')
const opi = document.querySelector('nav')
const h2 = document.querySelector('h2')


var conta=1
var soma=0
opi.addEventListener("click", function (){
    if(soma < conta){
    h2.style = '  font-size:2em;'
    opi.style = ' right: 0em ;; '
    soma++ 
}else{
   
 h2.style = '  font-size:1.5em;'
opi.style = ' right: -7em;  background-color: transparent;  '
conta++
    }
})
